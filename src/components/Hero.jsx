export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="glass max-w-2xl w-full text-center px-8 py-14 md:px-14 md:py-18 rounded-2xl">
        {/* Headline */}
        <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] font-semibold leading-[1.08] text-[#f0ede6] mb-5">
          Your Business,
          <br />
          <span className="text-warm">Online Today</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#c0bbb0] text-lg leading-relaxed max-w-lg mx-auto mb-10">
          Professional websites for local businesses. Free 24-hour live preview
          — no commitment, no upfront payment.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary" onClick={() => scrollTo('examples')}>
            See Examples
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5"/><path d="M7 6l5 5 5-5"/></svg>
          </button>
          <button className="btn-glass" onClick={() => scrollTo('contact')}>
            Get Free Preview
          </button>
        </div>
      </div>
    </section>
  )
}
