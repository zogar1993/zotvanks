import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }: any) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App: any) => (props: any) =>
			sheet.collectStyles(<App {...props} />),
		);

		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		// @ts-ignore
		const styleTags = this.props.styleTags
		return (
			<Html>
				<Head>
					{styleTags}
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}