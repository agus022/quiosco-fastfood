import { MinusIcon, PlusIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { OrderItem } from "@/src/types"
import { formatCurrency } from "@/lib"

type ProductDetailsProps = {
    item: OrderItem
}

export default function ProductDetails({ item }: ProductDetailsProps) {
    return (
         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">
            
            {/* Cabecera de la Tarjeta */}
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
                        {item.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-400 mt-0.5">
                        Precio unitario: {formatCurrency(item.price)}
                    </p>
                </div>
                
                {/* Botón eliminar flotante estilizado */}
                <button
                    type="button"
                    onClick={() => { }}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                    title="Eliminar de la orden"
                >
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>

            {/* Separador sutil */}
            <div className="my-4 border-t border-dashed border-gray-100" />

            {/* Pie de la Tarjeta: Controles y Total */}
            <div className="flex items-center justify-between gap-2">
                
                {/* Selector de Cantidad Minimalista */}
                <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100 p-1">
                    <button
                        type="button"
                        onClick={() => { }}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-white hover:text-amber-500 rounded-lg shadow-none hover:shadow-sm transition-all active:scale-90"
                    >
                        <MinusIcon className="h-4 w-4 stroke-[2.5]" />
                    </button>

                    <span className="w-9 text-center text-sm font-black text-gray-800 tabular-nums">
                        {item.quantity}
                    </span>

                    <button
                        type="button"
                        onClick={() => { }}
                        className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-white hover:text-amber-500 rounded-lg shadow-none hover:shadow-sm transition-all active:scale-90"
                    >
                        <PlusIcon className="h-4 w-4 stroke-[2.5]" />
                    </button>
                </div>

                {/* Subtotal Destacado */}
                <div className="text-right">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Subtotal
                    </p>
                    <p className="text-xl font-black text-gray-900 tracking-tight">
                        {formatCurrency(item.subtotal)}
                    </p>
                </div>
                
            </div>
            
        </div>
    )
    
}
