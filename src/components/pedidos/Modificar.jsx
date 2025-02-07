import { modificarPedido } from "@/lib/actions";
function PedidoModificar({ pedido,repartidores }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre' defaultValue={pedido.nombreCliente} />
            <input type='datetime-local' name='fechayhora' defaultValue={pedido.fechaHora} />
            <input name='direccion' defaultValue={pedido.direccion} />
           

            <select name="repartidorId" defaultValue={pedido.repartidorId} key={pedido.repartidorId}>
                {
                    repartidores.map((repartidor) =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>

            <button className="border-2 border-black">Modificar</button>
          
           
        </form>
    );
}
export default PedidoModificar;