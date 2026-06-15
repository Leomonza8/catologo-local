type Props = {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: Props) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <p className="font-bold text-zinc-800 text-base uppercase tracking-wide">
          {name}
        </p>
        <p className="text-emerald-600 font-extrabold text-lg mt-1">
          {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>

        <button className="mt-4 w-full bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest py-3 rounded-xl hover:bg-emerald-600 active:scale-95 transition-all duration-200">
          Adicionar
        </button>
      </div>
    </div>
  )
}
