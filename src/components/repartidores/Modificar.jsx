import { modificarRepartidor } from "@/lib/actions";
function RepartidorModificar({ Repartidor }) {
    return (
        <form action={modificarRepartidor}>
            <input type="hidden" name="id" defaultValue={Repartidor.id} />
            <input name='nombre' defaultValue={Repartidor.nombre} />
            <input name='telefono' defaultValue={Repartidor.telefono} />
           
            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}
export default RepartidorModificar;