export default function CareerStories() {
  const alumni = [
    { name: "Abhiram Perera", role: "Software Engineer", company: "Xero, Auckland", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" },
    { name: "Chamodi De Silva", role: "Data Analyst", company: "ANZ, Wellington", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
    { name: "Gayatri Ranasinghe", role: "Site Engineer", company: "Fletcher Construction", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">NZ CAREER STORIES</h2>
        <p className="text-xs text-slate mt-1">See where our graduates are working across New Zealand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alumni.map((person, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <img src={person.img} alt={person.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h4 className="font-heading font-bold text-sm text-navy">{person.name}</h4>
              <p className="text-[11px] text-emerald font-semibold">{person.role}</p>
              <p className="text-[10px] text-slate">{person.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}