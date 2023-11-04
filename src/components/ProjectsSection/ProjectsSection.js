import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "./projectsSection.module.scss"
import CircleTitle from "../CircleTitle/CircleTitle"
import Project from "../Project/Project"

const ProjectsSection = props => {
  const data = useStaticQuery(graphql`
    query getProjects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown/projects)/" } }
      ) {
        nodes {
          frontmatter {
            githubLink
            hasDomen
            link
            title
            videoLink
            tempDown
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

  const projects = data.allMarkdownRemark.nodes

  return (
    <section ref={props.propRef} className={styles.projectsSection}>
      {props.children}
      <CircleTitle txtColor={"#1F7A8C"} circleColor={"#E5F2FF"}>
        Projects
      </CircleTitle>
      <div className={styles.content}>
        {projects.map(project => (
          <Project key={project.id} project={project.frontmatter} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
