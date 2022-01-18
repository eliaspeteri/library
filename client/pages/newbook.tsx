import Head from "next/head"
import Layout from "../components/Layout"
import BookForm from "../components/BookForm"
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
