import { Product } from "@/app/generated/prisma/client"
import { formatCurrency } from "@/lib"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className=" bg-white shadow rounded-lg overflow-hidden">
            <div className="p-5">
                <h3 className="text-2xl font-bold">
                    {product.name}
                </h3>
                <p className="mt-5 font-black text-4xl text-amber-500"> {formatCurrency(product.price)} </p>
            </div>
        </div>
    );
}
