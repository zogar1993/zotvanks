import Link from "next/link"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Layout from '../../components/Layout'
import { getPostsPaths, getPostData } from '../../lib/posts'
import Head from 'next/head'

export default function Post({ post }: any) {
	return (
		<Layout>
			<Article>
				<Head>
					<title>{post.title}</title>
				</Head>

				<Link href={`/`}>
					<a>Back to Menu</a>
				</Link>
				<ReactMarkdown
					components={{
						code: ({...props}: any) => <Code {...props}/>,
						a: ({...props}: any) => <Anchor {...props}/>
					}}
				>
					{post.content}
				</ReactMarkdown>
			</Article>
		</Layout>
	)
}

export async function getStaticProps({ params }: any) {
	const post = await getPostData(params.id)
	return {
		props: {
			post
		}
	}
}

export async function getStaticPaths() {
	const paths = await getPostsPaths()
	return {
		paths,
		fallback: false
	}
}

const Article = styled.article`
  width: 672px;
  padding: 48px;
  background-color: white;
`

const Code = styled.code`
  background: lightgray;
`

const Anchor = styled.a`
  color: #08317e;
  text-decoration: underline;
`