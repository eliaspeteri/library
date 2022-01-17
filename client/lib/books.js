import fs from "fs"
import path from "path"
import matter from "gray-matter"

const booksDirectory = path.join(process.cwd(), "books")

export function getSortedBooksData() {
  // Get filenames in /books
  const fileNames = fs.readdirSync(booksDirectory)
  const allBooksData = fileNames.map((fileName) => {
    // Parse out the file ending
    const id = fileName.replace(/\.md/, "")

    // Read markdown file in as string
    const fullPath = path.join(booksDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata
    const matterResult = matter(fileContents)

    // Return data with id
    return {
      id,
      ...matterResult.data,
    }
  })
  return allBooksData
}
