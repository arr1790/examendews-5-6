import { insertarPedidos } from "@/lib/actions";
function PedidoInsertar() {
    return (
        <form action={insertarPedidos}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fechaHora" placeholder="Fecha y Hora" />
            <input name="direccion" placeholder="Direccion" />
            <input name="repartidorId" placeholder="repartidorId" />
         
            <button className="border-2 border-black">Insertar pedido</button>
        </form>
    );
}
export default PedidoInsertar;