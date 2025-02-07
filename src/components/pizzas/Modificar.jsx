import { modificarPizzas } from "@/lib/actions";
function PizzaModificar({ pizza }) {
    return (
        <form action={modificarPizzas}>
            <input type="hidden" name="id" defaultValue={pizza.id} />
            <input name='nombre' defaultValue={pizza.nombre} />
            <input name='precio' defaultValue={pizza.precio} />
           
            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}
export default PizzaModificar;