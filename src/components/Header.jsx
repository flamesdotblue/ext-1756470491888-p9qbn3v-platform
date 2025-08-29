import { ShoppingCart, Repeat } from 'lucide-react';

export default function Header({ mode, onModeChange }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-amber-400 to-red-500 grid place-items-center shadow-lg shadow-red-500/20">
            <span className="font-black text-slate-900">PT</span>
          </div>
          <span className="font-semibold tracking-tight text-lg">PokeTrade</span>
        </div>

        <nav className="flex items-center gap-2">
          <ModeToggle mode={mode} onChange={onModeChange} />
        </nav>
      </div>
    </header>
  );
}

function ModeToggle({ mode, onChange }) {
  const isBuy = mode === 'buy';
  return (
    <div className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/50 p-1">
      <button
        onClick={() => onChange('buy')}
        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
          isBuy ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'
        }`}
        aria-pressed={isBuy}
      >
        <ShoppingCart className="h-4 w-4" /> Buy
      </button>
      <button
        onClick={() => onChange('trade')}
        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
          !isBuy ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'
        }`}
        aria-pressed={!isBuy}
      >
        <Repeat className="h-4 w-4" /> Trade
      </button>
    </div>
  );
}
