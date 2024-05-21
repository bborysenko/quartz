import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header .page-title {
  margin: 0;
  flex: auto;
  font-size: 1.75rem;
  font-family: var(--headerFont);
  color: var(--dark);
  font-weight: revert;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
