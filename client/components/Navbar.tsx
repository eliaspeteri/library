import React from "react"
import Link from "next/link"
import { Item, Menu } from "semantic-ui-react"

export function Navbar(): JSX.Element {
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
        <Link href="/addbook">
          <a>New book</a>
        </Link>
      </Item>
    </Menu>
  )
}
