import React from "react"
import { graphql } from "gatsby"
import CloseButton from "../components/close-button"
import Img from "gatsby-image"
import Seo from "../components/seo"


import "./case-study.css"

export default function CaseStudy({ data }) {
   const post = data.markdownRemark
   let featuredImgFluid = post.frontmatter.coverImage.childImageSharp.fluid
   return (
      <div className="case-container">
         <Seo title={post.frontmatter.title}/>
         <CloseButton/>
         <Img className="case-cover-image" fluid={featuredImgFluid}/>
         <div className="case-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
   )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
