'use client';

import { useState } from 'react';

export default function ImageUploadField({
  value,
  onChange,
  folder,
}: {
  value: string;
  onChange: (url: string) => void;
  folder: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File) => {
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || 'Upload failed');
      onChange(json.url);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {value && (
        <img
          src={value}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-lg border border-gray-300 mb-3"
        />
      )}
      <input
        type="file"
        accept="image/*"
        disabled={uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
        className="text-xs"
      />
      {uploading && <p className="text-xs text-slate mt-1">Uploading...</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      <input
        type="text"
        placeholder="Or paste an image URL directly"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-2.5 text-xs mt-2 focus:outline-none focus:ring-2 focus:ring-navy"
      />
    </div>
  );
}
