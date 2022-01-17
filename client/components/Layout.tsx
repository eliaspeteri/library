import { Navbar } from "./Navbar"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
