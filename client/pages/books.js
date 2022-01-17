import Head from "next/head"
import Layout from "../components/Layout"
import { getSortedBooksData } from "../lib/books"
import { Container, Divider, Header } from "semantic-ui-react"

export default function Books({ allBooksData }) {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>

      <Container>
        <Header as="h1">Books</Header>
        {allBooksData.map(({ author, description, title }) => (
          <Container text fluid>
            <Header as="h2">
              {title} by {author}
            </Header>
            {description}
            <Divider />
          </Container>
        ))}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allBooksData = getSortedBooksData()
  return {
    props: {
      allBooksData,
    },
  }
}
