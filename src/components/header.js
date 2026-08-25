import * as React from "react"
import { Link } from "gatsby"

import { topBar } from "./styles.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={topBar}
  >
    <h1>{siteTitle}</h1>
  </header>
)

export default Header
