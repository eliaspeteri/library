import React, { useEffect, useState } from "react"
import { Header, List } from "semantic-ui-react"
import { IBook } from "../types"
import Link from "next/link"
/**
 * Displays books recently added by the user (eventually will show recent results from the database)
 * @returns JSX.Element
 */
export default function RecentBooks(): JSX.Element {
  const [recentBooks, setRecentBooks] = useState([])
  useEffect((): void => {
    setRecentBooks(JSON.parse(window.localStorage.getItem("recentBooks")) || [])
  })
  return (
    <>
      <Header as="h2">Recent Books added by readers like you</Header>
      <List size={"huge"}>
        {recentBooks.map(
          (book: IBook): JSX.Element => (
            <List.Item key={book.id}>
              <Link href={`/books/${book.id}`}>
                <a>
                  <i>{book.title}</i> by <b>{book.author}</b>
                </a>
              </Link>
            </List.Item>
          )
        )}
      </List>
    </>
  )
}
