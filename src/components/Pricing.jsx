const tiers = [
  {
    name: 'Generic',
    price: '₱15,000',
    desc: 'A proven template, customized with your colors, photos, and info — live in 24 hours.',
    who: 'Best for businesses that need to get online fast with a professional look.',
    features: [
      'Your full website, mobile-ready',
      'Colors, logo, photos swapped to match your brand',
      '2 rounds of revisions (content & colors)',
      '30-day support + hosting included',
      'Live preview before you pay',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Custom Standard',
    price: '₱29,000',
    desc: 'A unique website designed from scratch for your business — no templates, no shortcuts.',
    who: 'Best for cafés, barbershops, and service businesses that want to stand out.',
    features: [
      'Unique design, built just for you',
      'Up to 5 pages — Home, About, Services, Gallery, Contact',
      'Free domain (1st year) + premium hosting',
      'Google Business Profile setup',
      '2 rounds of revisions, 30-day support',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Custom Pro',
    price: '₱55,000',
    desc: 'Everything in Standard, plus bookings, payments, and content that brings customers back.',
    who: 'Best for established businesses ready to take orders and bookings online.',
    features: [
      'Everything in Standard',
      'Online booking or inquiry system',
      'GCash / Maya payment integration',
      'Blog, testimonials & team profiles',
      'Basic on-page SEO, 60-day support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Custom Enterprise',
    price: '₱85,000 – ₱120,000',
    desc: 'Full-featured platform — online store, memberships, or admin dashboard. Scoped to your needs.',
    who: 'Best for businesses ready to sell online or manage operations through their site.',
    features: [
      'Everything in Pro',
      'Online store — up to 50 products',
      'Customer accounts or membership system',
      'Admin dashboard to manage content',
      'Custom integrations & 90-day support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
]

export default function Pricing() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="relative z-10 px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-heading">Simple, Upfront Pricing</h2>
          <p className="text-[#b0aca3] max-w-lg mx-auto">
            50% deposit after you approve the mockup. 50% when your site goes live.
            No hidden fees, no surprises.
          </p>
        </div>

        {/* Cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass rounded-2xl p-7 md:p-8 flex flex-col ${
                tier.highlight
                  ? 'ring-1 ring-warm/40'
                  : ''
              }`}
            >
              {tier.highlight && (
                <span className="text-xs font-medium text-warm uppercase tracking-widest mb-4">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl font-semibold text-[#f0ede6] mb-1">
                {tier.name}
              </h3>
              <p className="text-[#b0aca3] text-sm mb-5 leading-relaxed">
                {tier.desc}
              </p>

              <div className="mb-5">
                <span className="font-display text-3xl font-bold text-warm">
                  {tier.price}
                </span>
              </div>

              <p className="text-xs text-[#88837b] mb-5 leading-relaxed italic">
                {tier.who}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#c0bbb0]">
                    <svg className="shrink-0 mt-0.5 text-warm" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={tier.highlight ? 'btn-primary w-full justify-center' : 'btn-glass w-full justify-center'}
                onClick={() => scrollTo('contact')}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="mt-8 glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 reveal">
          <div className="shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warm"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <div className="flex-1">
            <h4 className="font-display text-lg font-semibold text-[#f0ede6] mb-1">
              Ongoing Maintenance: ₱2,500/month
            </h4>
            <p className="text-sm text-[#b0aca3] leading-relaxed">
              Hosting, domain renewal, security updates, and content changes — your site stays live, fast, and up to date.
              Cancel anytime. No lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
