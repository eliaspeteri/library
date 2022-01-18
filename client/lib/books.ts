import fs from "fs"
import path from "path"
import matter, { GrayMatterFile } from "gray-matter"
/* Types */
import { IBook } from "../types"

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

export function getAllBookIds() {
  const fileNames = fs.readdirSync(booksDirectory)

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}

export function getBookData(id: string): IBook {
  const fullPath: string = path.join(booksDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, "utf8")

  // Parse metadata with gray-matter
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
}
