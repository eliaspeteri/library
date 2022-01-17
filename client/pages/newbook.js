import Head from "next/head"
import { useState } from "react"
import Layout from "../components/Layout"
import BookForm from "../components/BookForm"

export default function AddBook() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")

  return (
    <Layout>
      <Head>
        <title>Add book</title>
      </Head>
      <BookForm />
    </Layout>
  )
}
