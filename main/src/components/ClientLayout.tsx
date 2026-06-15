"use client"

import { useState } from "react"
import Header from "@/src/components/Header/Header"
import Cart from "@/src/components/Cart/Cart"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      {children}
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
