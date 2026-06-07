const sites = [
  {
    name: 'Kanto Coffee',
    type: 'Café & Specialty Coffee',
    url: 'https://allmites.github.io/kanto-coffee',
    img: '/screenshots/cafe-template.png',
    color: 'from-amber-900/40 to-amber-950/60',
  },
  {
    name: 'Noriel Plumbing',
    type: 'Trades & Services',
    url: 'https://allmites.github.io/noriel-plumbing',
    img: '/screenshots/trades-template.png',
    color: 'from-blue-900/40 to-blue-950/60',
  },
  {
    name: 'Oragon Barber',
    type: 'Barbershop',
    url: 'https://allmites.github.io/oragon-barber',
    img: '/screenshots/barbershop-template.png',
    color: 'from-stone-800/40 to-stone-950/60',
  },
]

export default function ExampleSites() {
  return (
    <section id="examples" className="relative z-10 px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-heading">Websites That Work</h2>
          <p className="text-[#b0aca3] max-w-lg mx-auto">
            Each site delivered in under 24 hours — mobile-ready,
            professional, and built for your neighborhood.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {sites.map((site, i) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover group overflow-hidden rounded-2xl block"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={site.img}
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${site.color}`} />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-[#f0ede6] mb-1">
                  {site.name}
                </h3>
                <p className="text-sm text-[#b0aca3] mb-4">{site.type}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-warm group-hover:text-warm-soft transition-colors">
                  View Live
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
