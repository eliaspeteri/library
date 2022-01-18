/* Next.js components */
import Head from "next/head"
/* Components */
import { BookForm, Layout } from "../components"
/* Semantic UI */
import { Header } from "semantic-ui-react"

/**
 * /newbook-route. Wraps the BookForm-component for adding, editing and removing entries in the database
 * @returns JSX.Element
 */
export default function NewBook(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>New book</title>
      </Head>
      <Header as="h1">New book</Header>
      <BookForm id={""} author={""} description={""} title={""} />
    </Layout>
  )
}
