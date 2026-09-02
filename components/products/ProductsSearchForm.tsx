"use client"
import { SearchSchema } from '@/src/schema'
import {useRouter} from "next/navigation"
import { toast } from 'react-toastify'

export default function ProductsSearchForm() {
    const router = useRouter()
    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')

        }
        const result  = SearchSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }
        router.push(`/admin/products/search?search=${result.data.search}`)
    }
  
  
    return (

    <form 
        className='flex w-full items-center gap-2'
        action={handleSearchForm}
    >
        <div className="relative w-full">
            {/* Icono de Lupa Decorativo */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                </svg>
            </div>
            
            {/* Input de Texto */}
            <input
                type='text'
                placeholder='Buscar por hamburguesa, papas, bebidas...'
                name='search'
                className='w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20'
            />
        </div>
        
        {/* Botón de Enviar */}
        <button 
            type='submit'
            className='rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 active:scale-[0.98] cursor-pointer'
        >
            Buscar
        </button>
    </form>
  )
}
