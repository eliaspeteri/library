import React from "react"
/* Next.js components */
import Link from "next/link"
/* Semantic UI */
import { Item, Menu } from "semantic-ui-react"

/**
 * A navbar component to ease navigating around the application.
 * @returns JSX.Element
 */
export default function Navbar(): JSX.Element {
  return (
    <Menu>
      <Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>
      <Item>
        <Link href="/books">
          <a>Books</a>
        </Link>
      </Item>
      <Item>
        <Link href="/newbook">
          <a>New book</a>
        </Link>
      </Item>
    </Menu>
  )
}
