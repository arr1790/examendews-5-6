import { insertarPedido } from "@/lib/actions";

function PedidoInsertar() {
    return (
        <form action={insertarPedido} className="bg-white p-6 rounded shadow-md">
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

            <button 
                type="submit" 
                className="border-2 border-black bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition"
            >
                Insertar Pedido
            </button>
        </form>
    );
}

export default PedidoInsertar;
