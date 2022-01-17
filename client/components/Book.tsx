import Link from "next/link"
import { Container, Divider, Header } from "semantic-ui-react"

interface Props {
  author: string
  description: string
  id: string
  title: string
}

export default function Book({
  author,
  description,
  id,
  title,
}: Props): JSX.Element {
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
      <Divider />
    </Container>
  )
}
