export interface IList {
   title: string,
   image: string,
   id?: string
}

export interface IBook {
  name: string,
  title: string,
  description: string,
  price: number,
  img: string,
  language: string,
  id: string,
  quantity: number,
  category: string | any,
  type?: string
}

export interface IInfo {
  name: string,
  title: string,
  description: string,
  img: string,
  id: string
}


export interface IBookTypeSelect{
  label?: string,
  value?: string,
  date?: string
}

