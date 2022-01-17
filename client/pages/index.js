/* Next.js components */
import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"

export default function Home({ allBooksData }) {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  )
}
