import {getPosts} from "../lib/posts"
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>Zotvanks - Home</title>
      </Head>
      <section>
        <ul>
          {posts.map(({ slug, title }: BlogArticle) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

type BlogArticle = {
  title: string
  slug: string
}