export interface IBook {
  id?: string | unknown
  author: string | unknown
  description?: string | unknown
  title: string | unknown
}

export interface BookProps {
  id: string
  author: string
  description?: string
  title: string
}
