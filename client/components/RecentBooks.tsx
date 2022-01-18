import React from "react"
import { Header, List } from "semantic-ui-react"
import { IBook } from "../types"

export default function RecentBooks(): JSX.Element {
  const recentBooks: [Omit<IBook, "id">] =
    JSON.parse(localStorage.getItem("recentBooks")) || []
  return (
    <>
      <Header as="h2">Recent Books added by readers like you</Header>
      <List>
        {recentBooks.map(
          (book: IBook): JSX.Element => (
            <List.Item>{book.title}</List.Item>
          )
        )}
      </List>
    </>
  )
}
