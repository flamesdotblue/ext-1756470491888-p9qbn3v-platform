import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import CardGrid from './components/CardGrid.jsx';

const initialCards = [
  {
    id: 'base1-4',
    name: 'Charizard',
    set: 'Base Set',
    category: 'Rare Holo',
    price: 320.0,
    image: 'https://images.pokemontcg.io/base1/4_hires.png',
  },
  {
    id: 'base1-2',
    name: 'Blastoise',
    set: 'Base Set',
    category: 'Rare Holo',
    price: 210.0,
    image: 'https://images.pokemontcg.io/base1/2_hires.png',
  },
  {
    id: 'base1-1',
    name: 'Alakazam',
    set: 'Base Set',
    category: 'Rare Holo',
    price: 120.0,
    image: 'https://images.pokemontcg.io/base1/1_hires.png',
  },
  {
    id: 'base1-58',
    name: 'Pikachu',
    set: 'Base Set',
    category: 'Common',
    price: 12.0,
    image: 'https://images.pokemontcg.io/base1/58.png',
  },
  {
    id: 'base1-88',
    name: 'Professor Oak',
    set: 'Base Set',
    category: 'Trainer',
    price: 5.0,
    image: 'https://images.pokemontcg.io/base1/88.png',
  },
  {
    id: 'neo1-9',
    name: 'Lugia',
    set: 'Neo Genesis',
    category: 'Rare Holo',
    price: 450.0,
    image: 'https://images.pokemontcg.io/neo1/9_hires.png',
  },
];

export default function App() {
  const [mode, setMode] = useState('buy'); // 'buy' | 'trade'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = new Set(initialCards.map((c) => c.category));
    return ['All', ...Array.from(unique)];
  }, []);

  const filteredCards = useMemo(() => {
    if (selectedCategory === 'All') return initialCards;
    return initialCards.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header mode={mode} onModeChange={setMode} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <CardGrid cards={filteredCards} mode={mode} />
      </main>
      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} PokeTrade — Fan-made marketplace and trading hub.
        </div>
      </footer>
    </div>
  );
}
