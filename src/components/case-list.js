import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/animations.css"

const CaseList = () => {
   const data = useStaticQuery(graphql`
      query CaseListQuery {
         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
           edges {
             node {
               id
               frontmatter {
                 title
                 date
                 path
                 emoji
               }
               fields {
                  slug
               }
             }
           }
         }
      }
   `)
   // console.log(data);
   return (
      <section>
         <h2 className="subtle-heading">cases</h2>
         <ul className="list-links">
            {data.allMarkdownRemark.edges.map(({ node }) => (
               <li className="list-link">
                  <span role="img">{node.frontmatter.emoji}</span>
                  <Link className="slide-animation" to={node.fields.slug}>
                     {node.frontmatter.title}
                  </Link>
               </li>
            ))}
            <li className="list-link" style={{fontStyle: "italic"}}>👀 one case study coming soon!</li>
         </ul>
      </section>
   )
}

export default CaseList
