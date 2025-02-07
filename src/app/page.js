import Link from "next/link";


export default function Home() {
  return (
<>
<>
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Restaurante</h1>
      <div className="flex justify-center items-center gap-6">
        <Link
          href="/repartidores"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
        >
          REPARTIDOR
        </Link>
        <Link
          href="/pedidos"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
        >
          PEDIDO
        </Link>
        <Link
          href="/pizzas"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
        >
          PIZZAS
        </Link>
      </div>
    </>
</>
  );
}
