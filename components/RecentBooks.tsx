/* eslint-disable @typescript-eslint/no-explicit-any */
/* Services */
import axios, { AxiosResponse } from "axios"
/* Semantic UI */
import { Container, Header, List, Segment } from "semantic-ui-react"
/* Next.js components */
import Link from "next/link"
/* Components */
import ErrorBoundary from "./ErrorBoundary"
/* Types */
import { BookProps } from "../types"
/* React */
import React from "react"
import useSWR from "swr"

const fetcher = (url: string): Promise<Record<string, unknown>> =>
  axios.get(url).then((res: AxiosResponse) => res.data)

interface Props {
  recentBooks?: [BookProps]
  limit?: number
}

/**
 *
 * @param books Books found in the database to render in a list.
 * @returns JSX.Element
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function renderBookList(books, error: any): JSX.Element {
  return (
    <Segment>
      {error ? (
        <Segment>Error loading recently added books.</Segment>
      ) : (
        <List size={"huge"} divided relaxed>
          {books
            .sort((a: BookProps, b: BookProps): 1 | -1 =>
              a.title > b.title ? 1 : -1
            )
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
        </List>
      )}
    </Segment>
  )
}

/**
 * Displays books recently added into the database.
 * @param limit How many items should be fetched from the API
 * @returns JSX.Element
 */
export default function RecentBooks({ limit }: Props): JSX.Element {
  const { data, error } = useSWR(
    `https://eliaspeteri-library-back.herokuapp.com/api/books?limit=${limit}`,
    fetcher
  )
  return (
    <>
      <Header as="h2">Recent Books added by readers like you</Header>
      <ErrorBoundary>
        {data ? (
          renderBookList(data, error)
        ) : (
          <Container>
            There doesn&apos;t seem to be anything new here. Maybe go check out
            if there&apos;s any new books to read? You can also add your own for
            others to find if you don&apos;t find what you like.
          </Container>
        )}
      </ErrorBoundary>
    </>
  )
}
