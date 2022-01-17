/* Next.js components */
import Head from "next/head"
import Layout from "../components/Layout"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Library</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  )
}
