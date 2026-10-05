import Logo from "@/components/Logo";
import WhyIcon from "@/components/WhyIcon";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/study-in-new-zealand", label: "Study in New Zealand" },
  { href: "/#pathways", label: "Courses & Institutions" },
  { href: "/#why", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/book-appointment", label: "Book Appointment" },
];

const SOCIAL_LINKS: { href: string; label: string; icon: "facebook" | "instagram" | "linkedin" | "whatsapp" }[] = [
  { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
  { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
  { href: "https://wa.me/6427770222", label: "WhatsApp", icon: "whatsapp" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
        {/* Brand */}
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm font-semibold text-white">Impact Education Limited — New Zealand</p>
          <p className="mt-1 text-gray-400 leading-relaxed">Your trusted education partner.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <WhyIcon name="phone" className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>027 770 2228</span>
            </li>
            <li className="flex items-start gap-2">
              <WhyIcon name="mail" className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>info@impacteducation.co.nz</span>
            </li>
            <li className="flex items-start gap-2">
              <WhyIcon name="pin" className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>21a Formby Avenue, Point Chevalier, Auckland, New Zealand</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all"
              >
                <WhyIcon name={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 mt-4">
            Update social links once your official accounts are live.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Impact Education Limited. All rights reserved.</p>
          <a href="/admin" className="hover:text-gray-300 transition-colors">CMS Login</a>
        </div>
      </div>
    </footer>
  );
}
