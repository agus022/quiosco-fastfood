import { create } from 'zustand';
import { OrderItem } from './types';
import { Product } from '@/app/generated/prisma/client';

interface StoreState {
    order: OrderItem[]
    addToOrder:(product: Product) => void
    increaseQuantity:(id:Product['id']) => void
    decreaseQuantity:(id:Product['id']) => void
    removeItem:(id:Product['id']) => void
}

export const useStore = create<StoreState>( (set, get) => ({

    order: [],
    addToOrder: (product: Product) => {  
        //console.log("Producto agregado al carrito:", product);
        const {categoryId,image,...data} = product;
        // Verificar si el producto ya está en el pedido, DUPLICADOS
        let order : OrderItem[]= [];
        if (get().order.find(item => item.id === data.id)) {
            order = get().order.map(item => item.id === data.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price
            } : item) 
        } else {
            order= [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * data.price
            }]
        }
        set(() => ({
            order
        }))
    },
    increaseQuantity: (id) => {
        set((state) => ({
            order : state.order.map(item => item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price
            } : item) 
        }))
    },
    decreaseQuantity: (id) => {
        //Verificar si el producto existe en el pedido antes de disminuir la cantidad , no permitir que la cantidad sea menor a 1
        const order = get().order.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: (item.quantity - 1) * item.price
        } : item).filter(item => item.quantity > 0); 
        set(() => ({
            order
        }))
    },
    removeItem:(id)=>{
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    }
}))     