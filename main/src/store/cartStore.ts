import { create } from "zustand"
import { Product } from "@/src/types/product"

type CartItem = Product & { quantity: number }

type CartStore = {
  items: CartItem[]
  add: (product: Product) => void
  remove: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clear: () => void
  total: () => number
  count: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  add: (product) => {
    const existing = get().items.find((i) => i.id === product.id)
    if (existing) {
      set((s) => ({
        items: s.items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }))
    } else {
      set((s) => ({ items: [...s.items, { ...product, quantity: 1 }] }))
    }
  },

  remove: (id) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().remove(id)
      return
    }
    set((s) => ({
      items: s.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    }))
  },

  clear: () => set({ items: [] }),

  total: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  count: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),
}))
