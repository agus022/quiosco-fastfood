import { ProductsWithCategory } from "@/app/admin/products/page"
import { Category, Product } from "@/app/generated/prisma/client"
import { formatCurrency } from "@/lib"
import Link from "next/link"

type ProductTableProps = {
        products : ProductsWithCategory
}

export default function ProductTable({products}: ProductTableProps) {
    return (
       <div className="mt-12 px-4 sm:px-6 lg:px-8">
            {/* Contenedor principal con sombra suave y bordes redondeados */}
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-left">
                        <thead className="bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            <tr>
                                <th scope="col" className="px-6 py-4.5">Producto</th>
                                <th scope="col" className="px-6 py-4.5">Precio</th>
                                <th scope="col" className="px-6 py-4.5">Categoría</th>
                                <th scope="col" className="relative px-6 py-4.5 text-right">
                                    <span className="sr-only">Acciones</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {products.map((product) => (
                                <tr 
                                    key={product.id} 
                                    className="transition-colors duration-150 hover:bg-gray-50/60"
                                >
                                    {/* Celda del Producto con Avatar Visual */}
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            
                                            <span className="font-medium text-gray-900">
                                                {product.name}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Celda del Precio Resaltada */}
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-800">
                                        {formatCurrency(product.price)}
                                    </td>

                                    {/* Celda de Categoría estilo Badge */}
                                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                                        <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/10">
                                            {product.category.name}
                                        </span>
                                    </td>

                                    {/* Botón de Acción Estilizado */}
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <Link
                                            href={`/admin/products/${product.id}/edit`}
                                            className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-orange-600"
                                        >
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            Editar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}