/* eslint-disable @typescript-eslint/no-explicit-any */
/* Next.js components */
import Head from "next/head"
/* Components */
import { Book, Layout } from "../../components"
/* React */
import React from "react"
/* Services */
import axios, { AxiosResponse } from "axios"
/* Hooks */
import useSWR from "swr"
import { NextRouter, useRouter } from "next/router"
import { Segment } from "semantic-ui-react"

const fetcher = (url: string): Promise<Record<string, unknown>> =>
  axios.get(url).then((res: AxiosResponse) => res.data)

/**
 * Produce and return a Book component specific to the book found with bookData.id
 * @param bookData Book related data as outlined by IBook in /types
 * @returns JSX.Element
 */
export default function Id(): JSX.Element {
  const router: NextRouter = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(
    `https://eliaspeteri-library-back.herokuapp.com/api/books/${id}`,
    fetcher
  )
  return (
    <Layout>
      {data ? (
        <Segment>
          <Head>
            <title>{data.title}</title>
          </Head>
          <Book
            author={data.author}
            description={data.description}
            id={data.id}
            title={data.title}
          />
        </Segment>
      ) : (
        <Segment>Error loading a book. {error}</Segment>
      )}
    </Layout>
  )
}
