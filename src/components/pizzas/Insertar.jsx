import { insertarPizzas } from "@/lib/actions";
function PizzaInsertar() {
    return (
        <form action={insertarPizzas}>
            <input name="nombre" placeholder="Nombre" />
            <input name="precio" placeholder="Precio" />
         
            <button className="border-2 border-black">Insertar pizza</button>
        </form>
    );
}
export default PizzaInsertar;