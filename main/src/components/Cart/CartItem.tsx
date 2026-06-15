"use client"

import { useCartStore } from "@/src/store/cartStore"

type Props = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartItem({ id, name, price, image, quantity }: Props) {
  const { remove, updateQuantity } = useCartStore()

  return (
    <div className="flex gap-3 py-4 border-b border-zinc-100 last:border-0">
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded-xl shrink-0" />

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-zinc-800 text-sm leading-tight">{name}</p>
          <button
            onClick={() => remove(id)}
            className="text-zinc-300 hover:text-red-400 transition-colors shrink-0 text-xs mt-0.5"
            aria-label="Remover"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-emerald-600 font-bold text-sm">
            {(price * quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={() => updateQuantity(id, quantity - 1)}
              className="w-7 h-7 rounded-lg bg-zinc-100 hover:bg-zinc-200 font-bold text-zinc-700 transition-colors text-sm"
            >
              −
            </button>
            <span className="w-6 text-center text-sm font-semibold text-zinc-800">{quantity}</span>
            <button
              onClick={() => updateQuantity(id, quantity + 1)}
              className="w-7 h-7 rounded-lg bg-zinc-100 hover:bg-zinc-200 font-bold text-zinc-700 transition-colors text-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
