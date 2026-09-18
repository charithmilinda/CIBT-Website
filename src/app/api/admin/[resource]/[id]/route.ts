import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { getResource } from '@/lib/admin/resources';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ resource: string; id: string }> }
) {
  const { resource, id } = await params;
  const def = getResource(resource);
  if (!def) {
    return NextResponse.json({ error: 'Unknown resource' }, { status: 404 });
  }

  const { data, error } = await supabaseAdmin
    .from(def.table)
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ resource: string; id: string }> }
) {
  const { resource, id } = await params;
  const def = getResource(resource);
  if (!def) {
    return NextResponse.json({ error: 'Unknown resource' }, { status: 404 });
  }

  const body = await request.json();

  const { data, error } = await supabaseAdmin
    .from(def.table)
    .update(body)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ resource: string; id: string }> }
) {
  const { resource, id } = await params;
  const def = getResource(resource);
  if (!def) {
    return NextResponse.json({ error: 'Unknown resource' }, { status: 404 });
  }

  const { error } = await supabaseAdmin.from(def.table).delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
