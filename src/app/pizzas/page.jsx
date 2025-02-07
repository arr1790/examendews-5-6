
import Pizzas from "@/components/pizzas/Lista";
import { Suspense } from "react";
export default function Pizzaspage() {
    return (
        <div>
           
            <Suspense fallback={"Obteniendo pizzas ..."}>
                <Pizzas />
            </Suspense>
        </div>
    );
}
