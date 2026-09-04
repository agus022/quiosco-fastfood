export function formatCurrency(amount:number) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    }).format(amount)
}


export function getImage(imagePath: string){
    const cloudinaryBaseUrl='https://res.cloudinary.com/'
    if(imagePath.startsWith(cloudinaryBaseUrl)){
        return imagePath
    }else{
        return `/assets/products/${imagePath}.jpg`
    }

}