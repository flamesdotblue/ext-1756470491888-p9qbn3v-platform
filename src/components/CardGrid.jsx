import { ShoppingCart, Repeat } from 'lucide-react';

export default function CardGrid({ cards, mode }) {
  return (
    <section className="mt-8 sm:mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} mode={mode} />)
        )}
      </div>
    </section>
  );
}

function CardItem({ card, mode }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
      <div className="aspect-[4/5] w-full bg-slate-950/60">
        <img
          src={card.image}
          alt={`${card.name} (${card.set})`}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{card.name}</h3>
            <p className="text-sm text-white/60">{card.set} · {card.category}</p>
          </div>
          <div className="text-right">
            <p className="text-emerald-300 font-bold">${card.price.toFixed(2)}</p>
            {mode === 'trade' && (
              <p className="text-xs text-white/50">Est. trade value</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          {mode === 'buy' ? (
            <button
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-slate-900 font-semibold w-full justify-center hover:bg-white/90 transition"
              onClick={() => alert(`Added ${card.name} to cart`)}
            >
              <ShoppingCart className="h-4 w-4" /> Add to cart
            </button>
          ) : (
            <button
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white w-full justify-center hover:bg-white/10 transition"
              onClick={() => alert(`Proposed trade for ${card.name}`)}
            >
              <Repeat className="h-4 w-4" /> Propose trade
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
