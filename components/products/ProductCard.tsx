import { Product } from "@/app/generated/prisma/client"
import { formatCurrency } from "@/lib"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
 <div className="group relative bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
        
        {/* Contenedor de la Imagen con destello al pasar el cursor */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4 flex items-center justify-center">
            {/* Reemplaza la ruta por tu propiedad de imagen real */}
            {/* <img 
                src={`/assets/${product.image || 'placeholder.png'}`} 
                alt={product.name} 
                className="object-contain w-4/5 h-4/5 transform group-hover:scale-110 transition-transform duration-500 ease-out"
            /> */}
            {/* Badge de categoría o estado (Opcional) */}
            {/* <span className="absolute top-3 left-3 bg-amber-500/10 text-amber-600 font-semibold text-xs px-2.5 py-1 rounded-full backdrop-blur-md">
                Popular
            </span> */}
        </div>

        {/* Información del Producto */}
        <div className="flex flex-col grow px-1">
            <h3 className="text-xl font-bold text-slate-800 tracking-tight line-clamp-2 group-hover:text-amber-600 transition-colors duration-200">
                {product.name}
            </h3>
        </div>

        {/* Fila de Precio y Acción */}
        <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-50 px-1">
            <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Precio</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                    {formatCurrency(product.price)}
                </span>
            </div>

            {/* Botón Flotante de Añadir (+ ) */}
            <button className="h-11 w-11 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

    </div>
    );
}
