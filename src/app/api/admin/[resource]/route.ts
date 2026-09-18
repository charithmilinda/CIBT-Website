import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { getResource } from '@/lib/admin/resources';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params;
  const def = getResource(resource);
  if (!def) {
    return NextResponse.json({ error: 'Unknown resource' }, { status: 404 });
  }

  const { data, error } = await supabaseAdmin
    .from(def.table)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ resource: string }> }
) {
  const { resource } = await params;
  const def = getResource(resource);
  if (!def) {
    return NextResponse.json({ error: 'Unknown resource' }, { status: 404 });
  }

  const body = await request.json();

  const { data, error } = await supabaseAdmin
    .from(def.table)
    .insert(body)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}
