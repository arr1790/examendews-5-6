import { eliminarPizza } from "@/lib/actions";
function PizzaEliminar({ pizza }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>NOMBRE: {pizza.nombre}</p>
            <p>Precio: {pizza.precio}</p>
         
            <form action={eliminarPizza}>
                <input type="hidden" name="id" defaultValue={pizza.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PizzaEliminar