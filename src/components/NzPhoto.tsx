'use client';

import { useState } from 'react';

// Shows /public/images/nz/<file>. If the file isn't there yet, a branded gradient
// placeholder with the caption is shown instead, so the layout never breaks.
export default function NzPhoto({
  file,
  caption,
  className = '',
}: {
  file: string;
  caption: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative overflow-hidden rounded-2xl bg-navy ${className}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/images/nz/${file}`}
          alt={caption}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      )}
      {failed && <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-emerald/40" />}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/90 to-transparent">
        <figcaption className="text-white text-xs font-bold">{caption}</figcaption>
      </div>
    </figure>
  );
}
