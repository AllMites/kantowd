export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/6 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-[#f0ede6] tracking-wide">
            Kanto Web Design
          </p>
          <p className="text-sm text-[#88837b] mt-1">
            Websites for the neighborhood. Parañaque, Metro Manila.
          </p>
        </div>

      </div>

      <p className="text-center text-xs text-[#66635e] mt-8">
        &copy; {new Date().getFullYear()} Kanto Web Design. All rights reserved.
      </p>
    </footer>
  )
}
