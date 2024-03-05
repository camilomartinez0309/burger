import { FC } from 'react';
import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa";
import DarkModeToggle from '@/components/theme-mode';


export const Header: FC = () => {
    return (
        <header className='fixed w-full top-0 right-0 left-0 z-20 bg-white shadow-md dark:bg-slate-600 transition-colors ease-in duration-300'>
            <div className='container mx-auto p-4 flex items-center justify-between'>
                <Link href="/" className='text-lg hover:text-blue-700 transition-colors duration-300 ease-in dark:text-white'>Burgers</Link>
                <div className='flex gap-4 items-center'>
                    <Link href="/cart" className='text-lg hover:text-blue-700 transition-colors duration-300 dark:text-white ease-in'><FaCartPlus /></Link>
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    )
};