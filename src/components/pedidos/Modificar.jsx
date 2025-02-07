import { modificarPedidos } from "@/lib/actions";
function PedidoModificar({ pedido }) {
    return (
        <form action={modificarPedidos}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre' defaultValue={pedido.nombreCliente} />
            <input name='fechayhora' defaultValue={pedido.fechaHora} />
            <input name='direccion' defaultValue={pedido.direccion} />
           
            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}
export default PacienteModificar;