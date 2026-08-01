import { Product } from "@/app/generated/prisma/client"
import { formatCurrency } from "@/lib"
import Image from "next/image";

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
        
        {/* Contenedor de la Imagen - Mantiene una relación de aspecto cuadrada */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
            <Image
                src={`/assets/products/${product.image}.jpg`}
                alt={`Imagen platillo ${product.name}`}
                fill // Hace que la imagen llene el contenedor dinámicamente
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimiza la descarga según la pantalla
                priority={false} // Cambia a true solo para los primeros 2-3 productos visibles de la página
                className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                quality={70} // Ajusta la calidad de la imagen para optimizar el rendimiento
            />
            
            {/* Badge de categoría */}
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

            {/* Botón Flotante */}
            <button type="button" className="h-11 w-11 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover/btn:scale-105">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </button>
        </div>

    </div>
    );
}
