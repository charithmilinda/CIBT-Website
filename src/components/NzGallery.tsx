import NzPhoto from './NzPhoto';

export default function NzGallery() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
          Life In New Zealand
        </span>
        <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
          Study, Explore, Belong
        </h2>
        <p className="text-xs text-slate mt-1">A glimpse of everyday student life in Aotearoa.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">
        <NzPhoto file="campus-life.jpg" caption="Campus life" className="col-span-2 row-span-2" />
        <NzPhoto file="auckland-skyline.jpg" caption="Auckland city" />
        <NzPhoto file="beach-lifestyle.jpg" caption="Beach lifestyle" />
        <NzPhoto file="queenstown-lake.jpg" caption="Queenstown adventures" />
        <NzPhoto file="student-community.jpg" caption="Student community" />
        <NzPhoto file="milford-sound.jpg" caption="Milford Sound" className="col-span-2" />
        <NzPhoto file="wellington-harbour.jpg" caption="Wellington harbour" className="col-span-2" />
      </div>
    </section>
  );
}
