import { modificarPedido } from "@/lib/actions";
function PedidoModificar({ pedido }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre' defaultValue={pedido.nombreCliente} />
            <input type='datetime-local' name='fechayhora' defaultValue={pedido.fechaHora} />
            <input name='direccion' defaultValue={pedido.direccion} />
           
            <button className="border-2 border-black">Modificar</button>
            <input type="hidden" name="repartidorId" defaultValue={pedido.repartidorId} />
           
        </form>
    );
}
export default PedidoModificar;