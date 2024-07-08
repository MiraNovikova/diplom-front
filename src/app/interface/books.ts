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
  id: string,
  quantity: number,
}

export interface IInfo {
  title: string,
  price: number,
  id: string,
  quantity: number
}


export interface IBookTypeSelect{
  label?: string,
  value?: string,
  date?: string
}

