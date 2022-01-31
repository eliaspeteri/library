/* eslint-disable @typescript-eslint/no-explicit-any */
/* Next.js components */
import Head from "next/head"
/* Components */
import { BookList, Layout } from "../components"
/* Semantic UI */
import { Segment, Header, Icon } from "semantic-ui-react"
/* Types */
import { BookProps } from "../types"
/* React */
import React from "react"
/* Hooks */
import useSWR from "swr"
/* Services */
import axios, { AxiosResponse } from "axios"

const fetcher = (url: string): Promise<BookProps[]> =>
  axios.get(url).then((res: AxiosResponse) => res.data)

/**
 * Renders a list of books with the author, title and a short blurb
 * @param allBooksData all books fetched from the database with getStaticProps
 * @returns JSX.Element
 */
export default function Books(): JSX.Element {
  const { data, error } = useSWR(
    "https://eliaspeteri-library-back.herokuapp.com/api/books",
    fetcher
  )

  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>
      <Header as="h2" textAlign="center">
        <Icon name="book" />
        Books
      </Header>
      {error ? (
        <Segment>Failed to load books.</Segment>
      ) : (
        <BookList books={data} />
      )}
    </Layout>
  )
}
