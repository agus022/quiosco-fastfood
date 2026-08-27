import prisma from "@/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  const categories = await getCategories();

  return (
    <aside className="md:w-76 md:h-screen bg-white border-r border-slate-100 flex flex-col sticky top-0 self-start">
      <Logo/>
      {/* Encabezado del Menú / Branding */}
      {/* <div className="pt-8 px-6 pb-4">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">
          La<span className="text-amber-500"> Capsula </span>
        </h2>
        <p className="text-xs font-medium text-slate-400 mt-1">
          Selecciona una categoría para ver los productos disponibles.
        </p>
      </div> */}

      {/* Navegación con Scroll Invisible si excede la pantalla */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  )
}
