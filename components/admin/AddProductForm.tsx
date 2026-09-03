"use client"
import { ProductSchema } from '@/src/schema'
import ProductForm from './ProductForm'
import { toast } from 'react-toastify'

export default function AddProductForm( {children}: {children: React.ReactNode}) {  
    const handleSubmint = async (formData: FormData) => {
        const data ={
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId')
        }
        const result = ProductSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach((issue) => {
                toast.error(issue.message)
            })
        }
        return 
    }
  
    return (
     <div className='mx-auto max-w-2xl mt-10'>

        <div className='overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8'>
            <form className='flex flex-col gap-6'
                action={handleSubmint}
            > 

                {children}
                
                <button
                    type="submit"
                    className='mt-2 w-full rounded-xl bg-linear-to-r from-amber-500 to-orange-600 py-3.5 px-4 text-center text-sm font-bold text-white shadow-md shadow-orange-600/10 transition-all hover:from-amber-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-[0.99] cursor-pointer'
                >
                    Registrar Producto
                </button>
            </form>
        </div>
    </div>
  )
}
