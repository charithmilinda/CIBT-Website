import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';
import { RESOURCES } from '@/lib/admin/resources';

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <AdminNav />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-heading text-2xl font-extrabold text-navy mb-2">Content Manager</h1>
        <p className="text-slate text-sm mb-8">
          Manage everything shown on the public site. Changes go live immediately.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(RESOURCES).map((r) => (
            <Link
              key={r.key}
              href={`/admin/${r.key}`}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all"
            >
              <h2 className="font-heading font-bold text-lg text-navy">{r.label}</h2>
              <p className="text-xs text-slate mt-1">Manage {r.label.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
