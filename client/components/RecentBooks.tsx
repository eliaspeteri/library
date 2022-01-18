import axios, { AxiosResponse } from "axios"
import React, { useEffect, useState } from "react"
import { Header, List, Segment } from "semantic-ui-react"
import { IBook } from "../types"
import Link from "next/link"
import ErrorBoundary from "./ErrorBoundary"

const fetcher = (url: string) =>
  axios.get(url).then((res: AxiosResponse) => res.data)

interface BookProps {
  id: string
  author: string
  description?: string
  title: string
}

interface Props {
  recentBooks?: [BookProps]
}

function renderBookList(books): JSX.Element {
  return (
    <>
      {books
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map(
          (book: IBook): JSX.Element => (
            <List.Item key={book.id}>
              <Link href={`/books/${book.id}`}>
                <a>
                  <i>{book.title}</i> by <b>{book.author}</b>
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
 * @returns JSX.Element
 */
export default function RecentBooks({ recentBooks }: Props): JSX.Element {
  const [recentBooksFallback, setRecentBooks] = useState([])
  useEffect((): void => {
    setRecentBooks(JSON.parse(window.localStorage.getItem("recentBooks")) || [])
  })
  return (
    <>
      <Header as="h2">Recent Books added by readers like you</Header>
      <ErrorBoundary>
        <List size={"huge"}>
          {!recentBooks ? (
            <Segment>
              There doesn't seem to be anything new here. Showing local results.
              {renderBookList(recentBooksFallback)}
            </Segment>
          ) : (
            renderBookList(recentBooks)
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
      recentBooks,
    },
  }
}
