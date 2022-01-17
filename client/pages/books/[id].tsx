import Layout from "../../components/Layout"
import Book from "../../components/Book"
import { getAllBookIds, getBookData } from "../../lib/books"
import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import { IBook } from "../../types"

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
  const paths = getAllBookIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: { bookData: any } }> => {
  // Fetch necessary data for the book using params.id
  const bookData: IBook = getBookData(params.id as string)
  return {
    props: {
      bookData,
    },
  }
}
