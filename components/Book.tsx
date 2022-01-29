/* Next.js components */
import Link from "next/link"
import { useState } from "react"
/* Semantic UI */
import { Button, Container, Divider, Header } from "semantic-ui-react"
/* Components */
import { BookForm } from "../components"
/* React */
import React from "react"

interface Props {
  author: string
  description?: string
  id: string
  title: string
}
/**
 * A component to render the details of a single book.
 * @param author Book author
 * @param description Book description
 * @param id Book ID
 * @param title Book title
 * @returns JSX.Element
 */
export default function Book({
  author,
  description,
  id,
  title
}: Props): JSX.Element {
  const [formState, toggleFormState] = useState(false)
  return (
    <Container text fluid>
      <Link href={`/books/${id}`}>
        <a>
          <Header as="h2" dividing>
            <i>{title}</i> by {author}
          </Header>
        </a>
      </Link>
      {description}
      <br />
      <Button
        onClick={(): void =>
          formState ? toggleFormState(false) : toggleFormState(true)
        }
      >
        Edit
      </Button>
      {formState ? (
        <BookForm
          id={id}
          author={author}
          description={description}
          title={title}
        />
      ) : null}
      <Divider />
    </Container>
  )
}
