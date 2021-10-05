import Link from "next/link"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Layout from '../../components/Layout'
import { getPostsPaths, getPostData } from '../../lib/posts'
import Head from 'next/head'

export default function Post({ post }: any) {
	return (

		<Layout>
		<div>
			<Head>
				<title>{post.title}</title>
			</Head>

			<Link href={`/`}>
				<a>Back to Menu</a>
			</Link>
			<ReactMarkdown
				children={post.content}
				components={{
					code: ({...props}: any) => <Code {...props}/>
				}}
			/>
		</div>
		</Layout>
	)
}
//<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

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

const Code = styled.code`
  background: lightgray;
`