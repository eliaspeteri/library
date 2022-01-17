import Layout from "../../components/layout"
import Book from "../../components/Book"
import { getAllBookIds, getBookData } from "../../lib/books"

export default ({ bookData }) => {
  return (
    <Layout>
      <Book
        author={bookData.author}
        description={bookData.description}
        title={bookData.title}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllBookIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the book using params.id
  const bookData = getBookData(params.id)
  return {
    props: {
      bookData,
    },
  }
}
