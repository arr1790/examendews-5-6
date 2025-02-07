import Pedidos   from "@/components/pedidos/Item";
import { Suspense } from "react";


async function PaginaPedido({ params, searchParams }) {
    const { id } = await params
    return (
        <div>
            <h1>DATOS DEL PEDIDO</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Pedidos id={id} />
               
             
            </Suspense>
        </div>
    )
}
export default PaginaPedido;