/* Semantic UI styling */
import { AppProps } from "next/dist/shared/lib/router/router"
import "semantic-ui-css/semantic.min.css"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
