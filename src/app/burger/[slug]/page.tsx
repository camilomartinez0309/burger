import AddToCart from "@/components/burger-add-to-cart";
import { getAllBurgersPaths, getBurgerList } from "@/service"
import { BurgerDataObject, BurgerDetailParams } from "@/utils/types";
import Image from 'next/image';

import type { Metadata } from 'next'

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
    const burgers: BurgerDataObject[] = await getBurgerList();
    const burger = burgers.filter((burger: BurgerDataObject) => burger.slug === slug)[0]
    return {
        title: burger.name,
    }
}



export async function generateStaticParams() {
    return await getAllBurgersPaths()
}

async function getBurgerDetails(slug: string) {
    const burgers: BurgerDataObject[] = await getBurgerList();
    const burger = burgers.filter((burger: BurgerDataObject) => burger.slug === slug)[0]
    return burger
}

export default async function Post({ params }: BurgerDetailParams) {
    const burger = await getBurgerDetails(params.slug)

    return <div className=" container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-1">
            <Image
                priority
                loading="eager"
                alt="Next.js photo"
                className="transform h-[400px] w-full rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={burger.image}
                width={500}
                height={400}
            />
        </div>
        <div className="col-span-2">
            <div className='p-4 sm:p-6'>
                <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{burger.name}</p>
                <div className='flex flex-row'>
                    <p className='text-[17px] font-bold text-[#0FB478]'>${burger.price}</p>
                </div>
                <p className='text-[#7C7C80] font-[15px] mt-6 line-clamp-2'>{burger.description}</p>
                <AddToCart burger={burger} />
            </div>
        </div>
    </div>
}