
import { link } from "fs"
import Logo from "../ui/Logo"
import AdminRoute from "./AdminRoute"

const adminNavigation = [
    {url: '/admin/orders', text: 'Ordenes', blank: false},
    {url: '/admin/products', text: 'Productos', blank: false},
    {url: '/order/cafe', text: 'Ver Quiosco', blank: true},
]

export default function AdminSidebar() {

    return (
        <>
        
       <div>
                {/* Contenedor del Logo alineado y limpio */}
                <div className="flex justify-center py-4 mb-6 border-b border-gray-100">
                    <Logo />
                </div>

                {/* Sección de Navegación */}
                <div className="space-y-4">
                    <p className="px-4 text-xs font-black uppercase tracking-widest text-gray-400">
                        Navegación Cocina
                    </p>
                    
                    {/* Contenedor de la navegación con separación amigable */}
                    <nav className="flex flex-col gap-2">
                        {adminNavigation.map(link => (
                            <AdminRoute
                                key={link.url}
                                link={link}
                            />
                        ))}
                    </nav>
                </div>
            </div>
            <div className="pt-4 border-t border-dashed border-gray-200 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Terminal Cocina
                </span>
            </div>

        </>

    )
}