import { AppProps } from "next/dist/shared/lib/router/router"
/* Semantic UI styling */
import "semantic-ui-css/semantic.min.css"
/* React */
import React from "react"
/* Components */
import { Layout, Navbar } from "../components"
/* Contexts */
import ToastProvider from "../context/ToastContext"
/**
 * App component to render subsequent components, and to handle sitewide styling.
 * @returns JSX.Element
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  )
}
