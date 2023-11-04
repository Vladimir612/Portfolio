import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "./homeSection.module.scss"
import Img from "gatsby-image"

import myCvPdf from "../../../static/VladimirLazarevic.pdf"

const HomeSection = props => {
  const data = useStaticQuery(graphql`
    query getMyImage {
      file(relativePath: { eq: "myImage.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section ref={props.propRef} className={styles.homeSection}>
      {props.children}
      <div className={styles.text}>
        <h1>Hi, my name is Vladimir!</h1>
        <p>
          I am Fullstack MERN web developer. You can always find me either
          working on team projects, or my own. I like to spend my free time
          doing something helpful for both me and my colleagues - I'm constantly
          helping them with programming, as it gives them better understanding
          of web development and it makes me a better educator.
        </p>
        <a href={myCvPdf} target="_blank" rel="noreferrer">
          <button>CHECK OUT MY CV</button>
        </a>
      </div>
      <div className={styles.myImage}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circleImg}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeSection
