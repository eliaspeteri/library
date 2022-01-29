/* Next.js components */
import Head from "next/head"
/* Components */
import { Book, Layout } from "../../components"
/* Helpers */
import { getAllBookIds, getBookData } from "../../lib/books"
/* Types */
import { GetStaticProps, GetStaticPaths } from "next"
import { IBook } from "../../types"
/* React */
import React from "react"
/**
 * Produce and return a Book component specific to the book found with bookData.id
 * @param bookData Book related data as outlined by IBook in /types
 * @returns JSX.Element
 */
export default function ({ bookData }: { bookData: IBook }): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{bookData.title}</title>
      </Head>
      <Book
        author={bookData.author}
        description={bookData.description}
        id={bookData.id}
        title={bookData.title}
      />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (): Promise<{
  paths: any
  fallback: any
}> => {
  // Return a list of possible values for id
  const paths = await getAllBookIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}): Promise<{ props: { bookData: any } }> => {
  // Fetch necessary data for the book using params.id
  const bookData: IBook = await getBookData(params.id as string)
  return {
    props: {
      bookData
    }
  }
}
