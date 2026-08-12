import { Product } from "@/app/generated/prisma/client"
import { formatCurrency } from "@/lib"
import Image from "next/image";
import AddProducts from "./AddProducts";

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
                //quality={70} // Ajusta la calidad de la imagen para optimizar el rendimiento
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

                <AddProducts
                    product={product}
                />
        </div>

    </div>
    );
}
