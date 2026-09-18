import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, applicantType, currentLevel, preferredField } = body;

    // Validate essential fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification via Resend
    const data = await resend.emails.send({
      from: 'Impact Education Consultation <onboarding@resend.dev>', // Update to your verified domain once live
      to: ['admissions@impacteducation.example'], // Replace with your real receiving email address
      subject: `New Consultation Booking: ${fullName}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Applicant Type:</strong> ${applicantType}</p>
        <p><strong>Highest Qualification:</strong> ${currentLevel}</p>
        <p><strong>Preferred Field:</strong> ${preferredField}</p>
        <hr />
        <p><em>Sent automatically from Impact Education website.</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send consultation request' },
      { status: 500 }
    );
  }
}