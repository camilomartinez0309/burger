'use client';

import { BurgerDataObject } from '@/utils/types';
import { useState, useEffect } from 'react';

interface Product extends BurgerDataObject {
    quantity: number,
    newPrice: number
}

const useLocalStorageCart = (initialCart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')) => {
    const [cart, setCart] = useState<Product[]>(initialCart);

    const addToCart = (product: Product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            updatedCart[existingProductIndex].newPrice = updatedCart[existingProductIndex].quantity * updatedCart[existingProductIndex].price;
            setCart(updatedCart);
        }
        else {
            setCart([...cart, product])
        }
    }
    const removeFromCart = (productId: number | string) => {
        const updatedCart = cart.filter((product) => +product.id !== +productId);
        setCart([...updatedCart]);
    };

    const updateQuantity = (productId: number | string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(+productId);
            return;
        }
        const updatedCart = cart.map((product) =>
            product.id === productId ? { ...product, quantity: newQuantity, newPrice: newQuantity * product.price } : product
        );
        setCart(updatedCart);
    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return { cart, addToCart, removeFromCart, updateQuantity };
};

export default useLocalStorageCart;
