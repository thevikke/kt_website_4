import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Profile() {
  return (
    <StaticImage
    src="../images/Profiili.png"
    alt="Profile picture"
    width={220}
    placeholder="blurred"
  />
  ) 
} 

