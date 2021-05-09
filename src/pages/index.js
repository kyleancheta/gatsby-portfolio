import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SocialLinks from "../components/socials"
import CaseList from "../components/case-list"

const IndexPage = () => (
  <Layout>
    <Seo title="kyle"/>
    <h1 className="home-title">
      hello there, i'm <span>kyle</span>.
      <br/><br/>
      currently i’m a product designer at bold commerce. dead on the inside but i think that's what makes me good at putting myself in other people's shoes. somehow. i don't know.
    </h1>

    <CaseList/>
    <SocialLinks/>

  </Layout>
)

export default IndexPage
