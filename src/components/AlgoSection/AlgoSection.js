import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import CircleTitle from "../CircleTitle/CircleTitle"
import * as styles from "./algoSection.module.scss"
import AlgoComponent from "./../AlgoComponent/AlgoComponent"

const AlgoSection = props => {
  const data = useStaticQuery(graphql`
    query getAlgorithms {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown/algorithms)/" } }
      ) {
        nodes {
          frontmatter {
            githubLink
            title
            explainLink
            video
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  `)

  const algorithms = data.allMarkdownRemark.nodes

  return (
    <section ref={props.propRef} className={styles.algoSection}>
      {props.children}
      <CircleTitle txtColor={"#F5F5F5"} circleColor={"#1F7A8C"}>
        Algorithms
      </CircleTitle>
      <div className={styles.content}>
        {algorithms.map(algo => (
          <AlgoComponent key={algo.id} algo={algo.frontmatter} />
        ))}
      </div>
    </section>
  )
}

export default AlgoSection
