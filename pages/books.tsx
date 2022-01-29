/* eslint-disable @typescript-eslint/no-explicit-any */
/* Services */
import axios, { AxiosResponse } from "axios"
/* Next.js components */
import Head from "next/head"
/* Components */
import { Book, Layout } from "../components"
/* Semantic UI */
import { Segment, Dimmer, Header, Image, Loader } from "semantic-ui-react"
/* Types */
import { BookProps } from "../types"
/* React */
import React from "react"

const fetcher = (url: string): Promise<any> =>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  axios.get(url).then((res: AxiosResponse): any => res.data)

interface Props {
  books: [BookProps]
  limit?: number
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
        {books.length < 1 ? (
          <Dimmer active>
            <Loader>Loading</Loader>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Dimmer>
        ) : null}

        <Header as="h1">Books</Header>
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
      </Segment>
    </Layout>
  )
}

export async function getStaticProps(): Promise<{
  props: { books: BookProps[] }
}> {
  const books: BookProps[] = await fetcher(
    `https://eliaspeteri-library-back.herokuapp.com/api/books`
  )
  return {
    props: {
      books
    }
  }
}
