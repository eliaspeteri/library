/* eslint-disable @typescript-eslint/no-explicit-any */
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
/* Hooks */
import useSWR from "swr"
/* Services */
import axios, { AxiosResponse } from "axios"

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

const fetcher = (url: string): Promise<BookProps[]> =>
  axios.get(url).then((res: AxiosResponse) => res.data)

/**
 * Renders a list of books with the author, title and a short blurb
 * @param allBooksData all books fetched from the database with getStaticProps
 * @returns JSX.Element
 */
export default function Books(): JSX.Element {
  const { data, error } = useSWR(
    "https://eliaspeteri-library-back.herokuapp.com/api/books",
    fetcher
  )

  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>
      <Segment>
        <Header as="h1">Books</Header>
        {error ? <Segment>Failed to load books.</Segment> : null}
        {data ? <BookList books={data} /> : <Segment>Loading...</Segment>}
      </Segment>
    </Layout>
  )
}
