/**
 * LOGO PLACEHOLDER
 * Replace this component's contents with your real logo once you have one, e.g.:
 *
 *   <img src="/logo.svg" alt="Impact Education" className={className} />
 *
 * Drop the logo file in /public/logo.svg (or .png) first.
 */
export default function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const boxStyle =
    variant === 'light'
      ? 'border-white/30 text-white/70'
      : 'border-navy/30 text-navy/50';

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`w-8 h-8 rounded-md border-2 border-dashed ${boxStyle} flex items-center justify-center text-[9px] font-bold uppercase leading-none`}
        title="Logo placeholder — replace with your real logo"
      >
        Logo
      </span>
      <span className={`font-heading font-extrabold text-2xl tracking-tight ${textColor}`}>
        Impact Education
      </span>
    </span>
  );
}
