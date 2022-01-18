import axios, { AxiosResponse } from "axios"
import Head from "next/head"
import Layout from "../components/Layout"
import Book from "../components/Book"
// import { getAllBooksData } from "../lib/books"
import {
  Container as Segment,
  Dimmer,
  Header,
  Image,
  Loader
} from "semantic-ui-react"
import { BookProps } from "../types"
const fetcher = (url: string): Promise<any> =>
  axios.get(url).then((res: AxiosResponse) => res.data)

interface Props {
  books: [BookProps]
  limit?: number
}

/**
 * Renders a list of books with the author, title and a short blurb
 * @param allBooksData all books fetched from the database with getStaticProps
 * @returns JSX.Element
 */
export default function Books({ books, limit = 3 }: Props): JSX.Element {
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
          .sort((a: BookProps, b: BookProps) => (a.title > b.title ? 1 : -1))
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
  const books: BookProps[] = await fetcher(`http://localhost:8080/api/books`)
  return {
    props: {
      books
    }
  }
}
