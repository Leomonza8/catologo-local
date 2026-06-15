type Item = { name: string; quantity: number; price: number }

export function buildWhatsAppUrl(phone: string, items: Item[]): string {
  const lines = items.map(
    (i) =>
      `• ${i.quantity}x ${i.name} — ${(i.price * i.quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
  )

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const message = [
    "Olá! Gostaria de fazer um pedido:",
    "",
    ...lines,
    "",
    `Total: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
  ].join("\n")

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
