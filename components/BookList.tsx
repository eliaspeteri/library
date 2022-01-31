/* React */
import React from "react"
/* Semantic-ui components */
import { Segment } from "semantic-ui-react"
/* Components */
import Book from "./Book"
/* Types */
import { BookProps } from "../types"
interface Props {
  books: BookProps[]
  limit?: number
}

export default function BookList({ books }: Props): JSX.Element {
  if (!books) return <Segment>Loading...</Segment>
  return (
    <>
      {books
        .sort((a: BookProps, b: BookProps): 1 | -1 =>
          a.title > b.title ? 1 : -1
        )
        .map(
          ({ author, description, id, title }: BookProps): JSX.Element => (
            <Book
              author={author}
              description={description}
              id={id}
              title={title}
              key={id}
            />
          )
        )}
    </>
  )
}
