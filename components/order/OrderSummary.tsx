"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/lib";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"; // Icono opcional para el estado vacío


export default function OrderSummary() {
  const order = useStore((state) => state.order);
  const total = useMemo(()=> order.reduce((total,item) => total + (item.quantity* item.price), 0), [order]);
  
  return (
     <aside className="md:h-screen md:w-80 lg:w-100 bg-gray-50 border-l border-gray-100 flex flex-col justify-between shadow-2xl relative">
      
      {/* Cabecera del Pedido */}
      <div className="p-6 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Mi pedido
          </h1>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">
            {order.length} {order.length === 1 ? 'producto' : 'productos'}
          </span>
        </div>
      </div>

      {/* Cuerpo del Pedido (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {order.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center p-6">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <ShoppingBagIcon className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">No hay elementos en tu pedido</p>
            <p className="text-sm text-gray-400 mt-1">¡Explora el menú y añade tus platillos favoritos!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {order.map(item => (
              <ProductDetails
                key={item.id}
                item={item}
              />
            ))}
          </div>
        )}
      </div>

      {/* Pie del Pedido (Fijo Abajo) */}
      {order.length > 0 && (
        <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] space-y-4">
          
          {/* Fila de Total */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
              Total a pagar
            </p>
            <p className="text-3xl font-black text-gray-900 tracking-tight">
              {formatCurrency(total)}
            </p>
          </div>

          {/* Botón de Confirmación / Pago */}
          <button
            type="button"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform active:scale-[0.98] shadow-lg shadow-amber-500/20 text-center text-lg tracking-wide"
          >
            Confirmar Pedido
          </button>
          
        </div>
      )}
      
    </aside>
  )
}

