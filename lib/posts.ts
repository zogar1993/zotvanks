const contentful = require("contentful")

const client = contentful.createClient({
	space: "3at70d2ge1j0",
	accessToken: "zK4Gha6qR7w9-gXTq7wvpbfWu-oraL-Vb2uatkYMXAQ"
});
//TODO make queries more performant with graphql
export async function getPosts() {
	const response = await client.getEntries({content_type: "article"})
	return response.items.map((x: any) => x.fields)
}

export async function getPostsPaths() {
	const response = await client.getEntries({content_type: "article"})
	return response.items.map((x: any) =>  ({ params: { id: x.fields.slug }}))
}

export async function getPostData(slug: any) {
	const response = await client.getEntries({
		content_type: "article",
		'fields.slug[match]': slug
	})
	const post: any = response.items[0].fields
	//const processedContent = await remark()
	//	.use(html)
	//	.process(matterResult.content)
	//const contentHtml = processedContent.toString()

	// Combine the data with the id and contentHtml
	return post
}