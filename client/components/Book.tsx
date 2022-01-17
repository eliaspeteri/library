import { Container, Divider, Header } from "semantic-ui-react"

export default function Book({ author, description, title }) {
  return (
    <Container text fluid>
      <Divider />
      <Header as="h2">
        {title} by {author}
      </Header>
      {description}
      <Divider />
    </Container>
  )
}
