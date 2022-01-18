import Head from "next/head"
import Layout from "../components/Layout"
import Book from "../components/Book"
import { getAllBooksData } from "../lib/books"
import { Container, Header } from "semantic-ui-react"

interface BookProps {
  author: string
  description: string
  title: string
}

interface Props {
  allBooksData: [BookProps]
}

/**
 * Renders a list of books with the author, title and a short blurb
 * @param allBooksData all books fetched from the database with getStaticProps
 * @returns JSX.Element
 */
export default function Books({ allBooksData }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>

      <Container>
        <Header as="h1">Books</Header>
        {allBooksData.map(
          ({
            author,
            description,
            id,
            title,
          }: {
            author: string
            description: string
            id: string
            title: string
          }): JSX.Element => (
            <Book
              author={author}
              description={description}
              id={id}
              title={title}
              key={id}
            />
          )
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps(): Promise<{
  props: { allBooksData: BookProps[] }
}> {
  const allBooksData: BookProps[] = getAllBooksData()
  return {
    props: {
      allBooksData,
    },
  }
}
