import Link from 'next/link';
import { RESOURCES } from '@/lib/admin/resources';

export default function AdminNav() {
  return (
    <nav className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/admin" className="font-heading font-extrabold text-lg tracking-tight">
          Impact Education Admin
        </Link>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider">
          {Object.values(RESOURCES).map((r) => (
            <Link key={r.key} href={`/admin/${r.key}`} className="hover:text-gold transition-colors">
              {r.label}
            </Link>
          ))}
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            View Site
          </Link>
        </div>
      </div>
    </nav>
  );
}
