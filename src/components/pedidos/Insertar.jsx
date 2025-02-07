'use client'
import { useEffect } from "react";
import { useId } from "react";
import { useActionState } from "react";
import { insertarPedido } from "@/lib/actions";
import { toast } from "sonner";  

function PedidoInsertar({ pizzas }) {
    const formId = useId();
    const [state, action, pending] = useActionState(insertarPedido, {}); 

    useEffect(() => {
        if (state.success) {
            toast.success(state.success); 
            document.getElementById(formId)?.closest("dialog")?.close(); 
        }

    }, [state, formId]);

    return (
        <form
            action={action}
            id={formId}
            className="bg-white p-6 rounded shadow-md"
        >
            <label className="block mb-2">Nombre del Cliente:</label>
            <input 
                name="nombre" 
                placeholder="Nombre" 
                required 
                className="border p-2 rounded w-full mb-4"
            />

            <label className="block mb-2">Fecha y Hora:</label>
            <input 
                type="datetime-local" 
                name="fechaHora" 
                required 
                className="border p-2 rounded w-full mb-4"
            />

            <label className="block mb-2">Dirección:</label>
            <input 
                name="direccion" 
                placeholder="Dirección" 
                required 
                className="border p-2 rounded w-full mb-4"
            />

            <label className="block mb-2">ID del Repartidor:</label>
            <input 
                name="repartidorId" 
                placeholder="ID del Repartidor" 
                type="number" 
                required 
                className="border p-2 rounded w-full mb-4"
            />

            <label className="block mb-2">Pizzas:</label>
            <div className="mb-4">
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
                className="border-2 border-black bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition"
            >
                {pending ? "Insertando..." : "Insertar Pedido"}
            </button>
        </form>
    );
}

export default PedidoInsertar;
