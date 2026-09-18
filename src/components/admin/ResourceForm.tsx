'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ResourceDef } from '@/lib/admin/resources';
import ImageUploadField from './ImageUploadField';

export default function ResourceForm({
  resource,
  id,
}: {
  resource: ResourceDef;
  id?: string; // present when editing
}) {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await fetch(`/api/admin/${resource.key}/${id}`);
      const json = await res.json();
      if (res.ok && json.data) setValues(json.data);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const setField = (name: string, val: any) => setValues((prev) => ({ ...prev, [name]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    // Only send fields defined on this resource (avoid sending id/created_at back)
    const payload: Record<string, any> = {};
    resource.fields.forEach((f) => {
      payload[f.name] = values[f.name] ?? null;
    });

    try {
      const res = await fetch(
        id ? `/api/admin/${resource.key}/${id}` : `/api/admin/${resource.key}`,
        {
          method: id ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Save failed');
      router.push(`/admin/${resource.key}`);
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-xs text-slate py-8">Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-card space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-200">{error}</div>
      )}

      {resource.fields.map((field) => (
        <div key={field.name}>
          <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'text' && (
            <input
              type="text"
              required={field.required}
              value={values[field.name] ?? ''}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
            />
          )}

          {field.type === 'date' && (
            <input
              type="date"
              required={field.required}
              value={values[field.name] ?? ''}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
            />
          )}

          {field.type === 'textarea' && (
            <textarea
              required={field.required}
              rows={4}
              value={values[field.name] ?? ''}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
            />
          )}

          {field.type === 'select' && (
            <select
              required={field.required}
              value={values[field.name] ?? ''}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <option value="" disabled>
                Select...
              </option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {field.type === 'image' && (
            <ImageUploadField
              value={values[field.name] ?? ''}
              onChange={(url) => setField(field.name, url)}
              folder={resource.key}
            />
          )}
        </div>
      ))}

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="bg-emerald hover:bg-emerald/90 disabled:opacity-50 text-white font-bold text-xs py-3 px-6 rounded-lg transition-colors"
        >
          {saving ? 'Saving...' : id ? 'Save Changes' : `Create ${resource.singular}`}
        </button>
      </div>
    </form>
  );
}
