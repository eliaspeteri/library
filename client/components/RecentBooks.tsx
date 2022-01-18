/* Services */
import axios, { AxiosResponse } from "axios"
import React from "react"
/* Semantic UI */
import { Container, Header, List } from "semantic-ui-react"
/* Next.js components */
import Link from "next/link"
/* Components */
import ErrorBoundary from "./ErrorBoundary"
/* Types */
import { BookProps } from "../types"

const fetcher = (url: string): Promise<any> =>
  axios.get(url).then((res: AxiosResponse) => res.data)
interface Props {
  recentBooks?: [BookProps]
}

/**
 *
 * @param books Books found in the database to render in a list.
 * @returns JSX.Element
 */
function renderBookList(books: BookProps[]): JSX.Element {
  return (
    <>
      {books
        .sort((a: BookProps, b: BookProps) => (a.title > b.title ? 1 : -1))
        .map(
          ({ author, id, title }: BookProps): JSX.Element => (
            <List.Item key={id}>
              <Link href={`/books/${id}`}>
                <a>
                  <i>{title}</i> by <b>{author}</b>
                </a>
              </Link>
            </List.Item>
          )
        )}
    </>
  )
}

/**
 * Displays books recently added into the database.
 * @param recentBooks An array of books recently added to the database.
 * @returns JSX.Element
 */
export default function RecentBooks({ recentBooks }: Props): JSX.Element {
  return (
    <>
      <Header as="h2">Recent Books added by readers like you</Header>
      <ErrorBoundary>
        <List size={"huge"}>
          {recentBooks ? (
            renderBookList(recentBooks)
          ) : (
            <Container>
              There doesn't seem to be anything new here. Maybe go check out if
              there's any new books to read? You can also add your own for
              others to find if you don't find what you like.
            </Container>
          )}
        </List>
      </ErrorBoundary>
    </>
  )
}

export async function getStaticProps(): Promise<{
  props: { recentBooks: BookProps[] }
}> {
  const recentBooks: BookProps[] = await fetcher(
    "http://localhost:8080/api/books?limit=10"
  )

  return {
    props: {
      recentBooks
    }
  }
}
