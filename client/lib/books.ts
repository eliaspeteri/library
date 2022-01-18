import axios, { AxiosResponse } from "axios"

/**
 *
 * @returns an array of identifiers
 */
export async function getAllBookIds() {
  const books: AxiosResponse = await axios.get(
    "http://localhost:8080/api/books"
  )
  return books.data.map((book) => {
    return {
      params: {
        id: book.id
      }
    }
  })
}

export async function getBookData(id: string) {
  const book: AxiosResponse = await axios.get(
    `http://localhost:8080/api/books/${id}`
  )
  return {
    author: book.data.author,
    description: book.data.description,
    title: book.data.title
  }
}
