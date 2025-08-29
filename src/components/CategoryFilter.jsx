export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <section id="browse" className="mt-6 sm:mt-10">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              selected === cat
                ? 'bg-white text-slate-900 border-white'
                : 'border-white/20 text-white/80 hover:text-white hover:border-white/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
