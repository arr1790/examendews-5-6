import { eliminarRepartidor } from "@/lib/actions";
function RepartidorEliminar({ planta }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>NOMBRE: {repartidor.nombre}</p>
            <p>Telefono: {repartidor.telefono}</p>
         
            <form action={eliminarRepartidor}>
                <input type="hidden" name="id" defaultValue={repartidor.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}
export default RepartidorEliminar;