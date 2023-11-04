import React from "react"
import * as styles from "./footer.module.scss"
import CircleTitle from "../CircleTitle/CircleTitle"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { clickFunc } from "./../Navbar/Navbar"

import myCvPdf from "../../../static/VladimirLazarevic.pdf"

const Footer = ({ sections, setActiveSection }) => {
  const data = useStaticQuery(graphql`
    query getMediaIcons {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "mediaIcons" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges

  const githubIcon = images[0].node.childImageSharp.fluid
  const linkedinIcon = images[1].node.childImageSharp.fluid
  const instaIcon = images[2].node.childImageSharp.fluid
  const gmailIcon = images[3].node.childImageSharp.fluid

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.top}>
        <div className={styles.socialMedia}>
          <CircleTitle txtColor={"#0AD2D2"} circleColor={"#fff"}>
            Vlada's portfolio
          </CircleTitle>
          <div className={styles.mediaIcons}>
            <a
              href="https://github.com/Vladimir612"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.imageWrapper}>
                <Img
                  fluid={githubIcon}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vladimir-lazarevic/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.imageWrapper}>
                <Img
                  fluid={linkedinIcon}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/v_lazarevic6/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.imageWrapper}>
                <Img
                  fluid={instaIcon}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            </a>
            <a
              href="mailto: vladimir.12.lazarevic@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.imageWrapper}>
                <Img
                  fluid={gmailIcon}
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                />
              </div>
            </a>
          </div>
        </div>
        <ul className={styles.links}>
          <li className={styles.listItem}>
            <button onClick={() => clickFunc(setActiveSection, 0, sections)}>
              HOME
            </button>
          </li>
          <li className={styles.listItem}>
            <button onClick={() => clickFunc(setActiveSection, 1, sections)}>
              ABOUT ME
            </button>
          </li>
          <li className={styles.listItem}>
            <button onClick={() => clickFunc(setActiveSection, 2, sections)}>
              MY PROJECTS
            </button>
          </li>
          <li className={styles.listItem}>
            <button onClick={() => clickFunc(setActiveSection, 3, sections)}>
              ALGORITHMS
            </button>
          </li>
        </ul>
        <div className={styles.buttons}>
          <a href={myCvPdf} target="_blank" rel="noreferrer">
            <button>CHECK OUT MY CV</button>
          </a>
          <button
            onClick={() => {
              clickFunc(setActiveSection, 4, sections)
            }}
          >
            CONTACT
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy;Copyright Vlada 2022</p>
      </div>
    </footer>
  )
}

export default Footer
