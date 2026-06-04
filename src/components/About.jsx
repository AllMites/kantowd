const points = [
  {
    title: 'Invisible Means Lost Customers',
    body: 'Most local businesses in Metro Manila have no website. When customers search online, they find your competitors — not you.',
  },
  {
    title: '24 Hours to Online',
    body: 'Send us your details, get a live preview site within 24 hours. No deposit, no commitment — see your business online before deciding.',
  },
  {
    title: 'Built for the Neighborhood',
    body: 'Based in Metro Manila, we understand what local customers look for: trust, proximity, and a business that feels familiar.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-heading">
            Your Customers Are Online.
            <br />
            <span className="text-warm">Are You?</span>
          </h2>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="glass p-6 md:p-7 rounded-2xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-warm text-3xl mb-4 font-display font-bold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#f0ede6] mb-2">
                {p.title}
              </h3>
              <p className="text-[#b0aca3] text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
