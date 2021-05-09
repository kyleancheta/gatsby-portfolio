import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import "../styles/animations.css"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <h2>this page is dead, just like my soul. <Link className="slide-animation" to="/">back to real life.</Link></h2>
  </Layout>
)

export default NotFoundPage
