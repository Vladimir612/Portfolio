import React, { useState } from "react"
import * as styles from "./navbar.module.scss"

import { motion } from "framer-motion"

const scrollFunc = sectionName => {
  sectionName.current &&
    sectionName.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    })
}

export const clickFunc = (setActiveSection, index, sections) => {
  setActiveSection(index)
  scrollFunc(sections[index])
}

const Navbar = ({ sections, activeSection, setActiveSection }) => {
  //hamburger
  const [menuOpen, setMenuOpen] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  return (
    <nav className={styles.navbar}>
      <p className={styles.logoText}>Vlada's portfolio</p>
      <div
        className={`${
          menuOpen
            ? styles.responsiveMenu + " " + styles.open
            : styles.responsiveMenu
        }`}
      >
        <div className={styles.links}>
          <button
            className={`${
              activeSection === 0
                ? styles.linkBtn + " " + styles.active
                : styles.linkBtn
            }`}
            onClick={() => {
              setMenuOpen(false)
              clickFunc(setActiveSection, 0, sections)
            }}
          >
            HOME
          </button>
          <button
            className={`${
              activeSection === 1
                ? styles.linkBtn + " " + styles.active
                : styles.linkBtn
            }`}
            onClick={() => {
              setMenuOpen(false)
              clickFunc(setActiveSection, 1, sections)
            }}
          >
            ABOUT ME
          </button>
          <button
            className={`${
              activeSection === 2
                ? styles.linkBtn + " " + styles.active
                : styles.linkBtn
            }`}
            onClick={() => {
              setMenuOpen(false)
              clickFunc(setActiveSection, 2, sections)
            }}
          >
            MY PROJECTS
          </button>
          <button
            className={`${
              activeSection === 3
                ? styles.linkBtn + " " + styles.active
                : styles.linkBtn
            }`}
            onClick={() => {
              setMenuOpen(false)
              clickFunc(setActiveSection, 3, sections)
            }}
          >
            ALGORITHMS
          </button>
        </div>
        <button
          className={`${
            activeSection === 4
              ? styles.contactBtn + " " + styles.active
              : styles.contactBtn
          }`}
          onClick={() => {
            setMenuOpen(false)
            clickFunc(setActiveSection, 4, sections)
          }}
        >
          CONTACT ME
        </button>
      </div>
      <button
        className={styles.hamburgerMenu}
        onClick={() => {
          setMenuOpen(!menuOpen)
          setShouldAnimate(true)
        }}
      >
        <motion.div
          className={styles.line}
          animate={
            shouldAnimate && {
              y: menuOpen
                ? ["0rem", "0.4rem", "0.4rem"]
                : ["0.4rem", "0.4rem", "0rem"],
              rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
            }
          }
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className={styles.line}
          animate={
            shouldAnimate && {
              opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
            }
          }
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className={styles.line}
          animate={
            shouldAnimate && {
              y: menuOpen
                ? ["0rem", "-0.4rem", "-0.4rem"]
                : ["-0.4rem", "-0.4rem", "0rem"],
              rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
            }
          }
          transition={{ duration: 0.5 }}
        ></motion.div>
      </button>
    </nav>
  )
}

export default Navbar
