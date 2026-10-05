import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUCKET = 'media';
const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const whatsapp = (formData.get('whatsapp') as string) || '';
    const dob = (formData.get('dob') as string) || '';
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const cv = formData.get('cv') as File | null;

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let cvUrl: string | null = null;

    if (cv && cv.size > 0) {
      if (cv.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'CV file must be under 8MB' }, { status: 400 });
      }
      const arrayBuffer = await cv.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const safeName = cv.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
      const path = `appointments/${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from(BUCKET)
        .upload(path, buffer, {
          contentType: cv.type || 'application/octet-stream',
          upsert: false,
        });

      if (!uploadError) {
        const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(path);
        cvUrl = data.publicUrl;
      }
    }

    const data = await resend.emails.send({
      from: 'Impact Education Appointments <onboarding@resend.dev>', // Update to your verified domain once live
      to: ['info@impacteducation.co.nz'],
      subject: `New Appointment Request: ${firstName} ${lastName}`,
      html: `
        <h2>New Book Appointment Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || '—'}</p>
        <p><strong>Date of Birth:</strong> ${dob || '—'}</p>
        <p><strong>Enquiry Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        ${cvUrl ? `<p><strong>CV:</strong> <a href="${cvUrl}">${cvUrl}</a></p>` : ''}
        <hr />
        <p><em>Sent automatically from the Impact Education website.</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Book appointment email error:', error);
    return NextResponse.json({ error: 'Failed to submit appointment request' }, { status: 500 });
  }
}
