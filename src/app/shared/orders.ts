import { IBook } from "../interface/books";

export type OrderType = IBook & {userId? : number} & AllProps

export type OrderPropsType = keyof OrderType;

export type AllProps = {[key: string]: string | number}


export const ORDERMOCK: OrderType[] = []