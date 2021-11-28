import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import BackLink from "../../components/BackLink"
import Link from "../../components/Link"
import { getPostsPaths, getPostData } from '../../lib/posts'
import Head from 'next/head'

export default function Post({ post }: any) {
	return (
		<Article>
			<Head>
				<title>{post.title}</title>
			</Head>
			<BackLink/>
			<ReactMarkdown
				components={{
					code: ({...props}: any) => <Code {...props}/>,
					a: ({...props}: any) => <Anchor {...props}/>
				}}
			>
				{post.content}
			</ReactMarkdown>
		</Article>
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
  padding: 48px;
  background-color: white;
`

const Code = styled.code`
	display: inline-block;
  background: lightgray;
  padding: 16px;
  border-radius: 4px;
`

const Anchor = styled.a`
  color: #08317e;
  text-decoration: underline;
`