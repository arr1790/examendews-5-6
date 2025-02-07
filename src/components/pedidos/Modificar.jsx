'use client'
import { useEffect } from "react";
import { useId } from "react";
import { useActionState } from "react";
import { modificarPedido } from "@/lib/actions";
import { toast } from "sonner";  

function PedidoModificar({ pedido, repartidores, pizzas }) {
    const formId = useId();
    const [state, action, pending] = useActionState(modificarPedido, {}); 

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);  
            document.getElementById(formId)?.closest("dialog")?.close();  
        }
    }, [state]);

    
    return (
        <form
            action={action}
            id={formId}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
        >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Modificar Pedido</h2>

            <input type="hidden" name="id" defaultValue={pedido.id} />

            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre del Cliente</label>
                <input
                    name="nombre"
                    id="nombre"
                    defaultValue={pedido.nombreCliente}
                    placeholder="Nombre del cliente"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="fechayhora" className="block text-gray-700 font-medium mb-2">Fecha y Hora</label>
                <input
                    type="datetime-local"
                    name="fechayhora"
                    id="fechayhora"
                    defaultValue={pedido.fechaHora}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="direccion" className="block text-gray-700 font-medium mb-2">Dirección</label>
                <input
                    name="direccion"
                    id="direccion"
                    defaultValue={pedido.direccion}
                    placeholder="Dirección del cliente"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="repartidorId" className="block text-gray-700 font-medium mb-2">Repartidor</label>
                <select
                    name="repartidorId"
                    id="repartidorId"
                    defaultValue={pedido.repartidorId}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                >
                    {repartidores.map(repartidor => (
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <p className="text-gray-700 font-medium mb-2">Pizzas</p>
                {pizzas.map(pizza => (
                    <label key={pizza.id} className="block mb-2">
                        <input
                            type="checkbox"
                            name={`pizzas${pizza.id}`}
                            value={pizza.nombre}
                            className="mr-2"
                        />
                        {pizza.nombre}
                    </label>
                ))}
            </div>

            <button
                type="submit"
                disabled={pending}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
            >
                {pending ? "Modificando..." : "Modificar Pedido"}
            </button>
        </form>
    );
}

export default PedidoModificar;
