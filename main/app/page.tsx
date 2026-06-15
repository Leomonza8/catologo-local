export default function Home() {
  return (
    <main className="p-6 bg-zinc-50 flex-1">
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="bg-zinc-200 h-40 rounded-lg mb-3" />
          <p className="font-semibold">Produto 1</p>
          <p className="text-zinc-500 text-sm">R$ 29,90</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="bg-zinc-200 h-40 rounded-lg mb-3" />
          <p className="font-semibold">Produto 2</p>
          <p className="text-zinc-500 text-sm">R$ 49,90</p>
        </div>

      </div>
    </main>
  );
}
