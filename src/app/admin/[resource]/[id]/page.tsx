import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import ResourceForm from '@/components/admin/ResourceForm';
import { getResource } from '@/lib/admin/resources';

export default async function EditResourcePage({
  params,
}: {
  params: Promise<{ resource: string; id: string }>;
}) {
  const { resource, id } = await params;
  const def = getResource(resource);
  if (!def) notFound();

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <AdminNav />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href={`/admin/${def.key}`} className="text-xs text-slate hover:text-navy">
          &larr; {def.label}
        </Link>
        <h1 className="font-heading text-2xl font-extrabold text-navy mt-1 mb-8">
          Edit {def.singular}
        </h1>
        <ResourceForm resource={def} id={id} />
      </div>
    </main>
  );
}
