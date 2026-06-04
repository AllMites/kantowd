export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-20 md:py-28">
      <div className="max-w-lg mx-auto text-center">
        {/* Header */}
        <div className="mb-10 reveal">
          <h2 className="section-heading">Let's Get Your Business Online</h2>
          <p className="text-[#b0aca3]">
            Call or text — no forms, no waiting. Tell us about your business
            and we'll send you a free preview within 24 hours.
          </p>
        </div>

        {/* Contact cards */}
        <div className="glass p-8 md:p-10 rounded-2xl space-y-6 reveal">
          {/* Phone */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-full glass flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warm"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="text-xs text-[#88837b] uppercase tracking-wider mb-0.5">Phone & SMS</p>
              <a href="tel:+639209100616" className="text-lg font-medium text-[#f0ede6] hover:text-warm transition-colors no-underline">
                +63 920 910 0616
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/6" />

          {/* Email */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-full glass flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warm"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p className="text-xs text-[#88837b] uppercase tracking-wider mb-0.5">Email</p>
              <a href="mailto:all.mites1@gmail.com" className="text-lg font-medium text-[#f0ede6] hover:text-warm transition-colors no-underline">
                all.mites1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
