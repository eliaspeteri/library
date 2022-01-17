import Head from "next/head"
import { Container, Button, Form } from "semantic-ui-react"
import Layout from "../components/Layout"

export default function AddBook() {
  return (
    <Layout>
      <Head>
        <title>Add book</title>
      </Head>
      <Container>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="What is the book called?" />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <input placeholder="Who wrote the book?" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea placeholder="What's it about?" />
          </Form.Field>
          <Button>Save New</Button>
          <Button disabled={true}>Save</Button>
          <Button disabled={true}>Delete</Button>
        </Form>
      </Container>
    </Layout>
  )
}
