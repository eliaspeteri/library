import { Button, Container, Divider, Form, Header } from "semantic-ui-react"

export default function BookForm() {
  return (
    <Container>
      <Header as="h1">New book</Header>
      <Divider />
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
  )
}
