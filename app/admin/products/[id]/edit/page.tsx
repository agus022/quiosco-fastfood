import EditProductForm from "@/components/admin/EditProductForm";
import ProductForm from "@/components/admin/ProductForm";
import Heading from "@/components/ui/Heading";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where:{
            id
        }
    })
    if(!product){
        notFound()
    }
    return product
}

export default async function EditProductsPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  //onsole.log(product);

  return (
    <>
<Heading>
  Editar producto: <span className="text-orange-600 font-normal text-2xl ml-2">{product.name}</span>
</Heading>
      <EditProductForm>
        <ProductForm
        product={product}
        />
      </EditProductForm>
    </>
  );
}