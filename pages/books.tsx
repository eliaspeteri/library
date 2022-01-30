/* eslint-disable @typescript-eslint/no-explicit-any */
/* Services */
import axios, { AxiosResponse } from "axios"
/* Next.js components */
import Head from "next/head"
/* Components */
import { Book, Layout } from "../components"
/* Semantic UI */
import { Segment, Header } from "semantic-ui-react"
/* Types */
import { BookProps } from "../types"
/* React */
import React from "react"

interface Props {
  books: BookProps[]
  limit?: number
}

export function BookList({ books }: Props): JSX.Element {
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

/**
 * Renders a list of books with the author, title and a short blurb
 * @param allBooksData all books fetched from the database with getStaticProps
 * @returns JSX.Element
 */
export default function Books({ books }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>
      <Segment>
        <Header as="h1">Books</Header>
        <BookList books={books} />
      </Segment>
    </Layout>
  )
}

const fetcher = (url: string): Promise<any> =>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  axios.get(url).then((res: AxiosResponse): any => res.data)

export async function getStaticProps(): Promise<{
  props: { books: BookProps[] }
}> {
  const books: BookProps[] = await fetcher(
    "https://eliaspeteri-library-back.herokuapp.com/api/books"
  )
  return {
    props: {
      books
    }
  }
}
