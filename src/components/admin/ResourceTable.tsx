'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ResourceDef } from '@/lib/admin/resources';

export default function ResourceTable({ resource }: { resource: ResourceDef }) {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/${resource.key}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      setRows(json.data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource.key]);

  const handleDelete = async (id: string) => {
    if (!confirm(`Delete this ${resource.singular.toLowerCase()}? This cannot be undone.`)) return;
    const res = await fetch(`/api/admin/${resource.key}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setRows((prev) => prev.filter((r) => r.id !== id));
    } else {
      const json = await res.json();
      alert(json.error || 'Delete failed');
    }
  };

  if (loading) return <p className="text-xs text-slate py-8">Loading...</p>;
  if (error) return <p className="text-xs text-red-600 py-8">{error}</p>;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-card">
      <table className="w-full text-xs">
        <thead className="bg-canvas border-b border-gray-200">
          <tr>
            {resource.columns.map((col) => (
              <th key={col.key} className="text-left px-5 py-3 font-bold text-slate uppercase tracking-wider">
                {col.label}
              </th>
            ))}
            <th className="text-right px-5 py-3 font-bold text-slate uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={resource.columns.length + 1} className="text-center py-10 text-slate">
                No {resource.label.toLowerCase()} yet.{' '}
                <Link href={`/admin/${resource.key}/new`} className="text-navy font-bold underline">
                  Add the first one
                </Link>
                .
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 last:border-0 hover:bg-canvas/50">
                {resource.columns.map((col) => (
                  <td key={col.key} className="px-5 py-3 text-charcoal">
                    {String(row[col.key] ?? '—')}
                  </td>
                ))}
                <td className="px-5 py-3 text-right space-x-4">
                  <Link href={`/admin/${resource.key}/${row.id}`} className="text-navy font-bold hover:text-gold">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="text-red-600 font-bold hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
