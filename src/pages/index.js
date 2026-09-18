import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content"
import Description from "../components/description"
import Profile from "../components/profile"
import { split } from "../components/styles.module.css"

const IndexPage = () => (
  <Layout>
    <Content>
      <div className={split}>
        <section>
          <Description/>
        </section>
        <section>
          <Profile/>
        </section>
      </div>
    </Content>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
