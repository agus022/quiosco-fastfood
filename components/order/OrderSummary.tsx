"use client";
import { useStore } from "@/src/store";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  
  return (
    <>
        <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p-5">
            <h1 className="text-4xl text-center font-black">Mi pedido</h1>
            {order.length === 0 ? <p className="text-center text-lg mt-5">No hay elementos en tu pedido</p> : (
              <div> Si hay algo</div>
            )}
        </aside>
    </>
  )
}

