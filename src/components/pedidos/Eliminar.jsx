import { eliminarPedido } from "@/lib/actions";
function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>Nombre de cliente: {pedido.nombreCliente}</p>
            <p>Fecha y hora: {pedido.fechaHora.toLocaleString()}</p>
            <p>Direccion: {pedido.direccion}</p>
         
            <form action={eliminarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}
export default PedidoEliminar