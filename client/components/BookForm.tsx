import { Button, Container, Divider, Form } from "semantic-ui-react"
import { ChangeEvent, useState } from "react"
import { IBook } from "../types"
import useResource from "../hooks/useResource"

/**
 * A basic form to add, edit and delete books in the database.
 * @param id Book ID, generated from the filename
 * @param author Book author, given by user
 * @param title Book Title, given by user
 * @param description Short book description, given by user
 * @returns JSX.Element
 */
export default function BookForm({
  id,
  author,
  title,
  description
}: IBook): JSX.Element {
  const [newTitle, setTitle] = useState(title)
  const [newAuthor, setAuthor] = useState(author)
  const [newDescription, setDescription] = useState(description)

  const bookService = useResource("http://localhost:8080/api/books")

  const handleSubmit = async (): Promise<void> => {
    event?.preventDefault()
    let recentBooks: [Omit<IBook, "id">] =
      JSON.parse(localStorage.getItem("recentBooks")) || []
    const newBook = {
      author: newAuthor,
      description: newDescription,
      title: newTitle
    }
    window.localStorage.setItem("newBook", JSON.stringify(newBook))
    recentBooks.push(newBook)
    window.localStorage.setItem("recentBooks", JSON.stringify(recentBooks))
    await bookService.create({
      author: newAuthor,
      description: newDescription,
      title: newTitle
    })
  }

  const handleDelete = async (): Promise<void> => {
    await bookService.remove(id)
  }

  const handleUpdate = async (): Promise<void> => {
    await bookService.update(id, {
      author: newAuthor,
      description: newDescription,
      title: newTitle
    })
  }

  return (
    <Container>
      <Divider />
      <Form>
        <Form.Field required>
          <label>Title</label>
          <input
            placeholder="What is the book called?"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setTitle(e.target.value)
            }
            value={newTitle}
          />
        </Form.Field>
        <Form.Field required>
          <label>Author</label>
          <input
            placeholder="Who wrote the book?"
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setAuthor(e.target.value)
            }
            value={newAuthor}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            placeholder="What's it about?"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
              setDescription(e.target.value)
            }
            value={newDescription}
          />
        </Form.Field>
        <Button
          disabled={!id && newTitle && newAuthor ? false : true}
          onClick={handleSubmit}
        >
          Save New
        </Button>
        <Button
          disabled={
            id === "" || newAuthor === "" || newTitle === "" ? true : false
          }
          onClick={handleUpdate}
        >
          Save
        </Button>
        <Button disabled={id ? false : true} onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </Container>
  )
}
