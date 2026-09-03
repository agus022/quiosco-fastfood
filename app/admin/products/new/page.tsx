import AddProductForm from '@/components/admin/AddProductForm'
import ProductForm from '@/components/admin/ProductForm'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function CreateProductsPage() {
  return (
   <>
    <Heading> Nuevo Producto </Heading>
    
    <AddProductForm>
      <ProductForm />
    </AddProductForm>
    
   </>
  )
}
