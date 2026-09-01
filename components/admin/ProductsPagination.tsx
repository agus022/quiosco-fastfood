import Link from 'next/link'
import React from 'react'


type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({page, totalPages} : ProductsPaginationProps) {

    const pages = Array.from({length: totalPages}, (_,i) => i+1) 
  const baseButtonStyles = "inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-orange-600"

    return (
        <nav className="flex items-center justify-center gap-2 border-t border-gray-100 py-10" aria-label="Paginación">
            {/* Botón Anterior */}
            {page > 1 ? (
                <Link
                    href={`/admin/products?page=${page - 1}`}
                    className={baseButtonStyles}
                >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-1.5 h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Anterior
                </Link>
            ) : (
                // Botón deshabilitado visualmente si estás en la página 1
                <span className="inline-flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed select-none">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-1.5 h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Anterior
                </span>
            )}

            {/* Números de Página */}
            <div className="hidden items-center gap-1.5 sm:flex">
                {pages.map((currentPage) => {
                    const isActive = currentPage === page

                    return (
                        <Link
                            href={`/admin/products?page=${currentPage}`}
                            key={currentPage}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-all ${
                                isActive
                                    ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/20 hover:bg-orange-700' // Estado Activo
                                    : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-orange-600 shadow-sm' // Estado Inactivo
                            }`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {currentPage}
                        </Link>
                    )
                })}
            </div>

            {/* Indicador de página móvil simplificado (se muestra solo en pantallas muy pequeñas) */}
            <span className="text-sm font-medium text-gray-500 sm:hidden px-2">
                Pág. {page} de {totalPages}
            </span>

            {/* Botón Siguiente */}
            {page < totalPages ? (
                <Link
                    href={`/admin/products?page=${page + 1}`}
                    className={baseButtonStyles}
                >
                    Siguiente
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1.5 h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            ) : (
                // Botón deshabilitado visualmente si estás en la última página
                <span className="inline-flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed select-none">
                    Siguiente
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1.5 h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            )}
        </nav>
    )
}
