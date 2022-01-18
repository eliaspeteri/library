/* Semantic UI styling */
import { AppProps } from "next/dist/shared/lib/router/router"
import "semantic-ui-css/semantic.min.css"

/**
 * App component to render subsequent components, and to handle sitewide styling.
 * @returns JSX.Element
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
