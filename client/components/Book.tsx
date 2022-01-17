import Link from "next/link"
import { Container, Divider, Header } from "semantic-ui-react"

export default function Book({ author, description, id, title }) {
  return (
    <Container text fluid>
      <Link href={`/books/${id}`}>
        <a>
          <Header as="h2" dividing>
            {title} by {author}
          </Header>
        </a>
      </Link>
      {description}
    </Container>
  )
}
