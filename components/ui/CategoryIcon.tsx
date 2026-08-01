"use client";
import { Category } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


type CategoryIconProps = {
  category: Category;

};
export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams();
  const isActive = category.slug === params.category;

  return (
    <div className="px-4 py-1.5">
      <Link 
        href={`/order/${category.slug}`}
        className={`
          group flex items-center gap-4 w-full p-3.5 rounded-2xl transition-all duration-300 ease-out select-none
          ${isActive 
            ? "bg-amber-500 text-white font-extrabold shadow-lg shadow-amber-500/25 scale-[1.02]" 
            : "bg-transparent text-slate-600 font-bold hover:bg-slate-50 hover:text-slate-900 hover:translate-x-1"
          }
        `}
      >
        {/* Contenedor del Icono con fondo responsivo según el estado */}
        <div className={`
          relative size-12 rounded-xl p-1.5 transition-colors duration-300 flex items-center justify-center shrink-0
          ${isActive ? "bg-white/15" : "bg-slate-100 group-hover:bg-amber-50"}
        `}>
          <Image
            src={`/assets/icon_${category.slug}.svg`}
            alt={`Imagen de la categoria: ${category.name}`}
            fill
            sizes="48px"
            className={`object-contain p-1 transition-transform duration-300 ${!isActive && "group-hover:scale-110"}`}
          />
        </div>

        {/* Texto de la Categoría */}
        <span className="text-base tracking-tight transition-colors duration-200">
          {category.name}
        </span>
      </Link>
    </div>
  );
}