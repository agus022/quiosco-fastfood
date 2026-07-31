import { Category } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";


type CategoryIconProps = {
  category: Category;

};

export default function CategoryIcon({category}: CategoryIconProps) {
  return (
    <div className={
        `flex items-center gap-4 w-full border-t
        p-3 last-of-type:border-b cursor-pointer
        hover:bg-amber-400 border-gray-200`}>
        
        <div className="relative size-16">
            <Image
                src={`/assets/icon_${category.slug}.svg`}
                alt={`Imagen de la categoria: ${category.name}`}
                fill
            />
        </div>
        <Link className="text-lg font-bold" href={`/order/${category.slug}`}>
            {category.name}
        </Link>
    </div>
  )
}
