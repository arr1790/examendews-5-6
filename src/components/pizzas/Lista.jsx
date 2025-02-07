import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";

async function Pizzas() {
  const pizzas = await obtenerPizzas();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        Lista de Pizzas
      </h2>
      <ul className="flex flex-col items-center justify-center mt-10">
        {pizzas.map((pizza) => (
          <li
            key={pizza.id}
            className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3"
          >
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/pizzas/${pizza.id}`} className="hover:underline">
                {pizza.nombre}
              </Link>
            </h2>
            <p className="text-gray-700 italic">
              <span className="font-bold">Precio:</span> ${pizza.precio}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizzas;

