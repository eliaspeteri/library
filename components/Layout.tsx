/* Components */
import Navbar from "./Navbar"
import Toast from "./Toast"
/* React */
import React from "react"

interface Props {
  children: React.ReactNode
}

/**
 * A layout component to tie together styling across pages, and to introduce the navbar to every page.
 * @param children Child components
 * @returns JSX.Element
 */
export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <Toast />
      <main>{children}</main>
    </>
  )
}
