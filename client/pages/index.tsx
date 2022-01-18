/* Next.js components */
import Head from "next/head"
/* Components */
import { Layout, RecentBooks } from "../components"

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
