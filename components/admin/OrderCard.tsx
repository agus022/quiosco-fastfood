import { completeOrder } from "@/actions/complete-order-action"
import { formatCurrency } from "@/lib"
import { OrderWithProducts } from "@/src/types"

type OrderCardProps={
    order: OrderWithProducts
}


export default function OrderCard({ order }: OrderCardProps) {
    


    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-6 rounded-2xl bg-white border border-gray-100 p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
        >
            <div>
                {/* Encabezado Principal: Nombre del Cliente */}
                <div className="border-b border-gray-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-500 block mb-1">
                        Pedido Activo
                    </span>
                    <h3 className='text-2xl font-black text-gray-900 tracking-tight'>
                        {order.name}
                    </h3>
                </div>

                {/* Subtítulo de Productos */}
                <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mt-4'>
                    Productos Ordenados
                </p>

                {/* Lista de Productos con contraste mejorado para Cocina */}
                <dl className="mt-2 space-y-2">
                    {order.orderProducts.map(product => (
                        <div 
                            key={product.productId} 
                            className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100"
                        >
                            {/* Cantidad resaltada en un contenedor llamativo */}
                            <dt className="flex items-center">
                                <span className="bg-orange-100 text-orange-700 font-extrabold text-base px-2.5 py-1 rounded-lg min-w-9 text-center">
                                    {product.quantity}x
                                </span>
                            </dt>
                            {/* Nombre del producto más grande y visible */}
                            <dd className="text-base font-semibold text-gray-800 capitalize">
                                {product.product.name}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Footer de la Card: Total y Botón de Acción */}
            <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-t border-dashed border-gray-200 pt-4 px-1">
                    <dt className="text-sm font-bold uppercase tracking-wider text-gray-500">Total:</dt>
                    <dd className="text-xl font-black text-gray-900">{formatCurrency(order.total)}</dd>
                </div>

                <form action={completeOrder}>
                    <input type="hidden" value={order.id} name="order_id"/>
                    <input
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-4 px-4 rounded-xl uppercase font-black text-sm tracking-wider cursor-pointer shadow-sm hover:shadow transition-all duration-150 active:scale-[0.99]"
                        value='Marcar Orden Completada'
                    />
                </form>
            </div>
        </section>
    )
}