import React from "react"
import * as styles from "./contactSection.module.scss"
import CircleTitle from "./../CircleTitle/CircleTitle"
import ContactForm from "./../Contact/ContactForm"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ContactSection = props => {
  const data = useStaticQuery(graphql`
    query getContactImage {
      file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section ref={props.propRef} className={styles.contactSection}>
      {props.children}
      <div className={styles.circleSection1}></div>
      <div className={styles.circleSection2}></div>
      <div className={styles.circleSection3}></div>
      <div className={styles.circleSection4}></div>
      <div className={styles.left}>
        <CircleTitle txtColor={"#044962"} circleColor={"#fff"}>
          Contact me
        </CircleTitle>
        <ContactForm />
      </div>
      <div className={styles.illustr}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circleIllustr}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
