import { FC } from 'react'

export const Footer: FC = () => {
    return (
        <footer className='p-6 bg-gray-100 h-28 text-center'>
            &copy; All Right Reserved {new Date().getFullYear()}
        </footer>
    )
};