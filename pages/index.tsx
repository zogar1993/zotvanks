import {getPosts} from "../lib/posts"
import Layout from "../components/Layout"
import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

//<aside>
//  <Image
//    src="/images/profile.png"
//    height={144}
//    width={144}
//    alt="Facundo Garcia Avatar"
//  />
//</aside>

export default function Home({ posts }: any) {
  return (
    <Layout>
      <Head>
        <title>Zotvanks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
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
    </Layout>
  )
}

type BlogArticle = {
  title: string
  slug: string
}