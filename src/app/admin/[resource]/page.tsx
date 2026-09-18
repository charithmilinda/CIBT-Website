import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import ResourceTable from '@/components/admin/ResourceTable';
import { getResource } from '@/lib/admin/resources';

export default async function ResourceListPage({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const { resource } = await params;
  const def = getResource(resource);
  if (!def) notFound();

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <AdminNav />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/admin" className="text-xs text-slate hover:text-navy">
              &larr; Dashboard
            </Link>
            <h1 className="font-heading text-2xl font-extrabold text-navy mt-1">{def.label}</h1>
          </div>
          <Link
            href={`/admin/${def.key}/new`}
            className="bg-gold hover:bg-gold/90 text-navy font-bold text-xs px-5 py-2.5 rounded-lg transition-all"
          >
            + New {def.singular}
          </Link>
        </div>

        <ResourceTable resource={def} />
      </div>
    </main>
  );
}
