export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(244,114,182,0.15),transparent_60%),radial-gradient(60%_40%_at_80%_20%,rgba(96,165,250,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-3xl py-16 sm:py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Buy, sell, and trade Pokémon cards
        </h1>
        <p className="mt-4 text-lg text-white/70">
          Discover vintage grails and modern hits. Transparent pricing, fast checkout, and a friendly trading experience.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#browse"
            className="rounded-md bg-white px-5 py-3 text-slate-900 font-semibold shadow hover:bg-white/90 transition"
          >
            Browse cards
          </a>
          <a
            href="#browse"
            className="rounded-md px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
          >
            View marketplace
          </a>
        </div>
      </div>
    </section>
  );
}
