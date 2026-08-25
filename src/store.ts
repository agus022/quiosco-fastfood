import { create } from 'zustand';
import { OrderItem } from './types';
import { Product } from '@/app/generated/prisma/client';

interface StoreState {
    order: OrderItem[]
    addToOrder:(product: Product) => void
}

export const useStore = create<StoreState>( (set) => ({

    order: [],
    addToOrder: (product: Product) => {  
        console.log("Producto agregado al carrito:", product);
        const {categoryId,image,...data} = product;
        set((state) => ({
            order: [...state.order, {
                ...data,
                quantity: 1,
                subtotal: 1 * data.price
            }]
        }))
    }
}))     