"use client"

import { useCartStore } from "@/src/store/cartStore"
import { buildWhatsAppUrl } from "@/src/utils/whatsapp"
import CartItem from "./CartItem"

const WHATSAPP_PHONE = "5511999999999"

type Props = {
  open: boolean
  onClose: () => void
}

export default function Cart({ open, onClose }: Props) {
  const { items, total, clear } = useCartStore()

  function handleCheckout() {
    const url = buildWhatsAppUrl(WHATSAPP_PHONE, items)
    clear()
    onClose()
    window.open(url, "_blank")
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
          <h2 className="font-black text-zinc-900 text-lg">Carrinho</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700 transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-400 gap-2">
              <span className="text-4xl">🛒</span>
              <p className="text-sm">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-zinc-100">
            <div className="flex justify-between mb-4">
              <span className="text-zinc-500 text-sm">Total</span>
              <span className="font-black text-zinc-900">
                {total().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-emerald-600 text-white font-bold text-sm uppercase tracking-widest py-3 rounded-xl hover:bg-emerald-700 active:scale-95 transition-all duration-200"
            >
              Pedir pelo WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
