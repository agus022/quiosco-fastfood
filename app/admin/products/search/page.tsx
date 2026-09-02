import ProductsPagination from "@/components/admin/ProductsPagination";
import ProductTable from "@/components/admin/ProductsTable";
import ProductsSearchForm from "@/components/products/ProductsSearchForm";
import Heading from "@/components/ui/Heading";
import prisma from "@/lib/prisma";
import Link from "next/link";

async function searchProducts (searchTerm: string){
    const products = await prisma.product.findMany({
        where: {
            name:{
                contains: searchTerm,
                mode:'insensitive'
            }
        },
        include: {
            category: true
        } 
    })
    return products
}
export default async function SearchPage({searchParams,}: {searchParams: Promise<{ search?: string }>}) {

  const params = await searchParams;

  const searchTerm = params.search ?? "";

  const products = await searchProducts(searchTerm);
    return (
        <>
            <Heading>Resultados de busqueda</Heading>
                <div className='mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm'>
                
                        {/* Buscador a la izquierda */}
                        <div className="w-full sm:max-w-md">
                          <ProductsSearchForm />
                        </div>
                
                        {/* Botón Crear Producto a la derecha con icono de comida */}
                        <Link
                          href={'/admin/products/new'}
                          className='inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-6 py-3 text-center text-base font-bold text-white shadow-md shadow-orange-600/10 transition-all hover:from-amber-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-[0.98] w-full sm:w-auto shrink-0'
                        >
                          {/* Icono SVG de una Hamburguesa */}
                          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          Crear Producto
                        </Link>
                      </div>
                
            <ProductTable
            products={products}
            />
        </>
    )
}