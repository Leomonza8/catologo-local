"use client"

import { useCartStore } from "@/src/store/cartStore"

type Props = {
  onCartClick: () => void
}

export default function Header({ onCartClick }: Props) {
  const count = useCartStore((s) => s.count())

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src="/images/loja.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="text-lg font-black text-zinc-900 tracking-tight">
            Catálogo<span className="text-emerald-600"> Local</span>
          </span>
        </div>

        <button
          onClick={onCartClick}
          className="relative p-2 rounded-xl hover:bg-zinc-100 transition-colors duration-200"
        >
          <img src="/images/carrinho-vazio.png" alt="Carrinho" className="w-6 h-6 object-contain" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </button>

      </div>
    </header>
  )
}
