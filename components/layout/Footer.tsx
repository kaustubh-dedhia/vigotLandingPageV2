import { navigation, wordmark, companyTagline } from '@/data/navigation';
import { contact, footer } from '@/data/contact';

const categoryHrefs: Record<string, string> = {
  'Rigid Boxes': '#rigid-boxes',
  'Mithai & Dry Fruit': '#mithai',
  'Chocolate': '#chocolate',
  'Toys & Games': '#toys',
  'Beauty': '#beauty',
  'Hampers': '#hampers',
  'Paper Bags': '#paper-bags',
};

export function Footer() {
  const handleNavClick = (href: string) => {
    if (typeof window === 'undefined') return;
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest text-white py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">{wordmark}</h2>
          <p className="mt-2 text-sm text-white/60">{companyTagline}</p>
          <p className="mt-6 max-w-xs text-sm text-white/50 leading-relaxed">
            Complete packaging solutions for products designed to be remembered.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer categories">
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Packaging</h3>
          <ul className="space-y-3">
            {footer.categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleNavClick(categoryHrefs[category] || '#')}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a></li>
            <li><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{contact.phone}</a></li>
            <li>{contact.location}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Social</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-white/40">{footer.copyright}</p>
        <a
          href={footer.privacyHref}
          className="text-xs text-white/40 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            alert('Privacy policy coming soon.');
          }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
