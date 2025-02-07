import { obtenerPedidos } from "@/lib/data";
import Link from "next/link";

async function Pedidos() {
  const pedidos = await obtenerPedidos();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        Lista de Pedidos
      </h2>
      <ul className="flex flex-col items-center justify-center mt-10">
        {pedidos.map((pedido) => (
          <li
            key={pedido.id}
            className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3"
          >
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/pedidos/${pedido.id}`} className="hover:underline">
                {pedido.nombreCliente}
              </Link>
            </h2>
            <p className="text-gray-700 italic">
              <span className="font-bold">Fecha y hora:</span>{" "}
              {new Date(pedido.fechaHora).toLocaleString()}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Dirección:</span> {pedido.direccion}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pedidos;
