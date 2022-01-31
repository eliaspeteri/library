export interface IBook {
  id?: string
  author: string
  description?: string
  title: string
  whenCreated?: Date
}

export interface BookProps {
  id: string
  author: string
  description?: string
  title: string
  whenCreated?: Date
}
