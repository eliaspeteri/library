import Head from "next/head"
import Layout from "../components/Layout"
import Book from "../components/Book"
import { getAllBooksData } from "../lib/books"
import { Container, Header } from "semantic-ui-react"

export default function Books({ allBooksData }) {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>

      <Container>
        <Header as="h1">Books</Header>
        {allBooksData.map(({ author, description, title }) => (
          <Book author={author} description={description} title={title} />
        ))}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allBooksData = getAllBooksData()
  return {
    props: {
      allBooksData,
    },
  }
}
