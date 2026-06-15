export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-black">C</span>
          </div>
          <span className="text-lg font-black text-zinc-900 tracking-tight">
            Catálogo<span className="text-emerald-600"> Local</span>
          </span>
        </div>

        <button className="relative p-2 rounded-xl hover:bg-zinc-100 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-zinc-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .955-.343 1.087-.835l1.457-5.468A1.125 1.125 0 0016.383 6H6.107L5.25 3H2.25"
            />
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
            0
          </span>
        </button>

      </div>
    </header>
  )
}
