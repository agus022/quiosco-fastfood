import ProductTable from '@/components/admin/ProductsTable'
import Heading from '@/components/ui/Heading'
import prisma from '@/lib/prisma'


async function getProducts(){
  const products = await prisma.product.findMany()

  return products
}

export default async function ProductsPage() {

  const products = await getProducts()
  //console.log(products)

  return (
    <>
        <Heading>
            Administrar productos
        </Heading>
        <ProductTable
        products={products}
        />
    </>
  )
}
