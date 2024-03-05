'use client'
import { AddToCartProps } from '@/utils/types'
import React, { FC, useState } from 'react'
import { AddToCartModal } from './dialog'
import useLocalStorageCart from '@/hooks/cart';


const AddToCart: FC<AddToCartProps> = ({ burger }) => {
    const { addToCart } = useLocalStorageCart();
    let [isOpen, setIsOpen] = useState<boolean>(false);

    const handleAddToCart = () => {
        addToCart({ ...burger, quantity: 1, newPrice: burger.price })
        setIsOpen(true)
    }

    return (
        <div>
            <button onClick={handleAddToCart} className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                Add To Cart
            </button>
            <AddToCartModal burger={burger} open={isOpen} setOpen={(val) => setIsOpen(val)} />
        </div>
    )
}

export default AddToCart