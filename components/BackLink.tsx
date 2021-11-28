import styled from "styled-components"
import Link from "./Link"

export default function BackLink() {
	return (
		<Link href={`/`}>
			<Arrow/>Back to Menu
		</Link>
	)
}

const Arrow = styled.div`
	position: relative;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  margin-right: 4px;
  margin-bottom: 1px;
`