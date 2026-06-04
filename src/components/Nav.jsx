export default function Nav() {
  return (
    <nav className="nav-blur fixed top-0 inset-x-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg text-[#f0ede6] tracking-wide">
          Kanto Web Design
        </span>
        <a
          href="#contact"
          className="text-sm font-medium text-warm hover:text-warm-soft transition-colors"
        >
          Get Free Preview
        </a>
      </div>
    </nav>
  )
}
