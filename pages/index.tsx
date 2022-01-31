/* Next.js components */
import Head from "next/head"
/* React */
import React from "react"
import { RecentBooks } from "../components"
/**
 * Homepage-route
 * @returns JSX.Element
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecentBooks limit={5} />
    </>
  )
}
