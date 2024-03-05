import { BurgerCardProps } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

export const BurgerCard: FC<BurgerCardProps> = ({ burger: { image, name, description, price, slug } }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-full max-w-md  mx-auto bg-white dark:bg-red-800 rounded-3xl shadow-xl overflow-hidden'>
                <div className='max-w-md mx-auto'>
                    <Image
                        priority
                        loading="eager"
                        alt="Next.js photo"
                        className="transform h-[236px] w-full object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
                        style={{ transform: "translate3d(0, 0, 0)" }}
                        src={image}
                        width={500}
                        height={236}
                    />
                    <div className='p-4 sm:p-6'>
                        <p className='font-bold text-gray-700 dark:text-purple-500 text-[22px] leading-7 mb-1'>{name}</p>
                        <div className='flex flex-row'>
                            <p className='text-[17px] font-bold text-[#0FB478]'>${price}</p>
                        </div>
                        <p className='text-[#7C7C80] font-[15px] mt-6 line-clamp-2'>{description}</p>
                        <Link href={"/burger/" + slug} className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] dark:bg-teal-300 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                            More Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};