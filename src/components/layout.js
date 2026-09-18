import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { content, footer, body } from "./styles.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <body className={body}>
        <main className={content}>{children}</main>
        <footer className={footer}>
          © {new Date().getFullYear()} &middot; Built by {` `} {data.site.siteMetadata?.author}
        </footer>
      </body>
    </>
  )
}

export default Layout
