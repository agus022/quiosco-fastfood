import prisma from "@/lib/prisma";
import ImageUpload from "./ImageUpload";

async function getCategories() {
  return await prisma.category.findMany()
}


export default async function ProductForm() {
    const categories = await getCategories();
    // Estilo común para todos los inputs y select para mantener consistencia
    const inputStyles = "block w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
    const labelStyles = "block text-sm font-semibold text-gray-700"

    return (
        <>
            {/* Campo: Nombre del Producto */}
            <div className="space-y-2">
                <label className={labelStyles} htmlFor="name">
                    Nombre del Producto
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className={inputStyles}
                    placeholder="Ej. Hamburguesa Doble con Queso"
                />
            </div>

            {/* Campo: Precio */}
            <div className="space-y-2">
                <label className={labelStyles} htmlFor="price">
                    Precio ($)
                </label>
                <div className="relative rounded-xl shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-sm font-medium text-gray-400">$</span>
                    </div>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        step="0.01"
                        className={`${inputStyles} pl-7`}
                        placeholder="0.00"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className={labelStyles} htmlFor="categoryId">
                    Categoría
                </label>
                <div className="relative">
                    <select
                        className={`${inputStyles} appearance-none pr-10`}
                        id="categoryId"
                        name="categoryId"
                    >
                        <option value="">-- Seleccione una categoría --</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                   
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                        <svg xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <ImageUpload 
                  

                />
            </div>
        </>
    )
}
