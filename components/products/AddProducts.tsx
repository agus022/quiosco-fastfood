"use client"

import { Product } from "@/app/generated/prisma/client"
import { useStore } from "@/src/store";


type AddProductsProps = {
    product: Product
}

export default function AddProducts({product}: AddProductsProps) {
    const addToOrder = useStore((state) => state.addToOrder);

    return (
        <>
            {/* Botón Flotante */}
            <button 
                type="button" 
                className="h-11 w-11 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
                onClick={() => addToOrder(product)}
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover/btn:scale-105">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

            </button>
        </>
    )
}
