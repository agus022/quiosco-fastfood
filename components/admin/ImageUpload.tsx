"use client"
import {CldUploadWidget} from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import {TbPhotoPlus} from 'react-icons/tb'

export default function ImageUpload() {
    const [imageUrl, setImageUrl] = useState('')
  return (
    <CldUploadWidget 
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    widget.close()
                    //@ts-ignore
                    setImageUrl(result.info?.secure_url)
                }
            }}
            uploadPreset="fast_food_quiosco"
            options={{
                maxFiles: 1, 
                maxFileSize: 2000000, // 2MB
                clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
            }}
        >
            {({ open }) => (
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Imagen del producto
                    </label>
                    
                    <div
                        onClick={() => open()}
                        className="group relative flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50/50 p-4 text-center transition-all duration-200 hover:border-orange-500 hover:bg-orange-50/20"
                    >
                        {imageUrl ? (
                            <>
                                {/* Contenedor de la Imagen Guardada */}
                                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl">
                                    <Image
                                        fill
                                        className="object-contain transition duration-300 group-hover:scale-105 group-hover:blur-[2px]"
                                        src={imageUrl}
                                        alt="Imagen del producto"
                                    />
                                </div>
                                {/* Capa superior interactiva al pasar el mouse */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-xl">
                                    <TbPhotoPlus size={50} className="text-white mb-1" />
                                    <p className="text-sm font-medium text-white">Cambiar imagen</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Estado Vacío (Dropzone vacío) */}
                                <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-gray-200 transition group-hover:text-orange-500 group-hover:scale-110 duration-200">
                                    <TbPhotoPlus size={28} className="text-gray-500 group-hover:text-orange-500" />
                                </div>
                                <div className="mt-3 space-y-1">
                                    <p className="text-sm font-semibold text-gray-700">Haga clic para agregar imagen</p>
                                    <p className="text-xs text-gray-400">Formatos aceptados: JPG, PNG, WEBP (Máx. 2MB)</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </CldUploadWidget> 
    )
}
