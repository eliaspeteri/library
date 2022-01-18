import fs from "fs"
import path from "path"
import matter, { GrayMatterFile } from "gray-matter"
/* Types */
import { IBook } from "../types"
import axios, { AxiosResponse } from "axios"

const booksDirectory: string = path.join(process.cwd(), "books")

/**
 * Fetches all the entries in /client/books, will be reimplemented by connection to database instead.
 * @returns An array of objects with interface of IBook
 */
export function getAllBooksData(): IBook[] {
  // Get filenames in /books
  const fileNames: string[] = fs.readdirSync(booksDirectory)
  const allBooksData: IBook[] = fileNames.map((fileName: string): IBook => {
    // Parse out the file ending
    const id: string = fileName.replace(/\.md/, "")

    // Read markdown file in as string
    const fullPath: string = path.join(booksDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata
    const matterResult: GrayMatterFile<string> = matter(fileContents)

    // Return data with id
    return {
      id,
      ...(matterResult.data as {
        author: string
        description: string
        title: string
      })
    }
  })
  return allBooksData.sort((a, b) => {
    return a.title > b.title ? 1 : -1
  })
}

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
