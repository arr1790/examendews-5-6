import Repartidores from "@/components/repartidores/Lista";
import { Suspense } from "react";

export default function RepartidoresPage() {
  return (
    <div>
      <Suspense fallback={"Obteniendo repartidores ..."}>
        <Repartidores />
      </Suspense>
    </div>
  );
}
