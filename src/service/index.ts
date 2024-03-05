import { BurgerDataObject } from "@/utils/types";

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
export const getBurgerList = async () => {
    const res = await fetch(baseURL + "/data/products.json", { next: { revalidate: 1000 } })
    if (!res.ok) {
        throw new Error('Failed to burgers')
    }
    const data = await res.json();
    return data.products
};

export const getAllBurgersPaths = async () => {
    const res = await fetch(baseURL + "/data/products.json")
    if (!res.ok) {
        throw new Error('Failed to burgers')
    }
    const data = await res.json();
    const paths = data.products.map((burger: BurgerDataObject) => ({ params: { slug: burger.slug } }))
    return paths

}