/* Next.js components */
import Head from "next/head"
import Layout from "../components/Layout"
import RecentBooks from "../components/RecentBooks"

/**
 * Homepage-route
 * @returns JSX.Element
 */
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecentBooks />
    </Layout>
  )
}
