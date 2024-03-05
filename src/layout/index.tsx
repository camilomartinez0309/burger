import { AppLayoutProps } from '@/utils/types';
import { FC } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow my-20'>
                {children}
            </main>
            <Footer />
        </div>
    )
};