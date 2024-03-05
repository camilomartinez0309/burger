import { ReactNode } from "react";

export type AppLayoutProps = {
    children: ReactNode
}

export type BurgerDataObject = {
    id: string | number,
    name: string,
    price: number,
    image: string,
    description: string,
    calorie: number,
    slug: string
};

export type BurgerCardProps = {
    burger: BurgerDataObject
}

export type BurgerDetailParams = {
    params: { slug: string }
}
export interface AddToCartProps extends BurgerCardProps { }
export interface AddToCartDialogProps extends BurgerCardProps {
    open: boolean,
    setOpen: (value: boolean) => void
}
