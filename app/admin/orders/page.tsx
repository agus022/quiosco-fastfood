import OrderCard from '@/components/admin/OrderCard'
import Heading from '@/components/ui/Heading'
import prisma from '@/lib/prisma'

async function getPendingOrders(){
  const orders = await prisma.order.findMany({
    where:{
      status: false
    },
    include:{
      orderProducts:{
        include:{
          product:true
        }
      }
    }
  })
  return orders
}
export default async function OrdersPage() {
  const orders = await getPendingOrders()
  //console.log(orders)
  return (
    <>
      <Heading>
        Administrar ordenes
      </Heading>

      {orders.length?(
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'> 
          {orders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}
        </div>
      ):<p className='text-center'> NO HAY ORDENES PENDIENTES </p>}
    
    </>
    
  )
}
