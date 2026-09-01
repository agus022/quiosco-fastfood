import {redirect} from 'next/navigation'
import ProductsPagination from '@/components/admin/ProductsPagination'
import ProductTable from '@/components/admin/ProductsTable'
import Heading from '@/components/ui/Heading'
import prisma from '@/lib/prisma'

//obtener el total de los productos para la paginacion 
async function productCount(){
  return await prisma.product.count()
}

//obtener todos los productos de la base de datos
async function getProducts(page : number , pageSize: number){
  const skip = (page -1) * pageSize
  
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include:{
      category: true
    }
  })

  return products
}

//cargar la categoria de los productos , el nombre ya que la consulta general solo trae el ID 
export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({searchParams,}: {searchParams: Promise<{ page?: string }>}) {
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const pageSize = 10

  if (page < 0) redirect ('/admin/products')

  const productsData = await getProducts(page, pageSize);
  const totalProductsData = await productCount();
  //para consulta independientes para que sean PARALELAR 
  const [products, totalProducts] = await Promise.all([productsData,totalProductsData])
  const totalPages = Math.ceil(totalProducts/pageSize);

  if (page > totalPages) redirect ('/admin/products')
    
  return (
    <>
      <Heading>Administrar productos</Heading>
      <ProductTable products={products} />
      <ProductsPagination 
      page={page}
      totalPages={totalPages}
      />
    </>
  );
}
