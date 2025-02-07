import Pedidos from "@/components/pedidos/Lista";
import { Suspense } from "react";
export default function PedidosPage() {
    return (
        <div>
           
            <Suspense fallback={"Obteniendo pedidos ..."}>
                <Pedidos />
            </Suspense>
        </div>
    );
}
