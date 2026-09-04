import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      {/* Icono temático de comida rápida */}
      <div className="mb-4 text-6xl animate-bounce animate-once">
        🍔🍟
      </div>

      {/* Título principal */}
      <Heading>¡Ups! Producto no encontrado</Heading>
      
      {/* Mensaje de ayuda UX */}
      <p className="mt-2 max-w-sm text-gray-500 text-sm">
        Parece que este platillo no está en nuestro menú por ahora o el enlace ya no existe.
      </p>

      {/* Botón de acción principal mejorado */}
      <Link
        href="/admin/products"
        className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Volver al Menú de Productos
      </Link>
    </div>
  )
}
