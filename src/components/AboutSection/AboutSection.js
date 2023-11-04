import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "./aboutSection.module.scss"
import Img from "gatsby-image"
import CircleTitle from "../CircleTitle/CircleTitle"

const AboutSection = props => {
  const data = useStaticQuery(graphql`
    query getIcons {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "techIcons" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      file(relativePath: { eq: "aboutMe.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const dataArr = data.allFile.edges

  const topRowIcons = dataArr.slice(0, 5)
  const bottomRowIcons = dataArr.slice(5)

  return (
    <section ref={props.propRef} className={styles.aboutSection}>
      {props.children}
      <div className={styles.circleSection1}></div>
      <div className={styles.circleSection2}></div>
      <div className={styles.circleSection3}></div>
      <div className={styles.illustr}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circleIllustr}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </div>
      </div>
      <div className={styles.text}>
        <CircleTitle txtColor={"#044962"} circleColor={"#fff"}>
          About me
        </CircleTitle>
        <p>
          Currently I'm a student majoring in Informational systems and
          technologies at the Faculty of Organizational Sciences. I also
          completed an IT major in high school when I became interested in web.
          In my first year of college, I got an internship and soon after, a
          job. However, I decided to dedicate myself more to the university and
          my own projects. Since then, I'm on a path of constantly improving as
          a web developer.
        </p>
        <div className={styles.icons}>
          <div className={styles.topRow}>
            {topRowIcons.map(icon => (
              <div key={icon.node.id} className={styles.imageWrapper}>
                <Img
                  fluid={icon.node.childImageSharp.fluid}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
          <div className={styles.bottomRow}>
            {bottomRowIcons.map(icon => (
              <div key={icon.node.id} className={styles.imageWrapper}>
                <Img
                  fluid={icon.node.childImageSharp.fluid}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
