import OrderSidebar from "@/components/order/OrderSidebar"
import ProductCard from "@/components/products/ProductCard"
import prisma from "@/lib/prisma"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return products
}


export default async function OrderPage({ params }: { params: Promise<{ category: string }> }) {
 const { category } = await params
 const products = await getProducts(category)
  //console.log(products)
  return (
    <>
    <h1 className="text-3xl font-bold text-slate-900 mb-5">Elige lo que vas a comer hoy:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} 
          product={product}
          />
        ))}
      </div>
    </>

  )
}
