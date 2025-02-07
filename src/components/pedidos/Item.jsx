import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

async function Pedido({ id }) {
  const pedido = await obtenerPedido(id);
  if (!pedido) notFound();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          {pedido.nombreCliente}
        </h2>
        <p className="text-gray-600 text-lg font-semibold">
          <span className="font-bold">ID:</span> {pedido.id}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Dirección:</span> {pedido.direccion}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Fecha y Hora:</span>{" "}
          {new Date(pedido.fechaHora).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Pedido;
