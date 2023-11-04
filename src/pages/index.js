import React, { useRef, useState } from "react"
import HomeSection from "../components/HomeSection/HomeSection"
import AboutSection from "../components/AboutSection/AboutSection"
import Navbar from "../components/Navbar/Navbar"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import Footer from "../components/Footer/Footer"
// import ContactSection from "../components/ContactSection/ContactSection"
import AlgoSection from "../components/AlgoSection/AlgoSection"

import VisibilitySensor from "react-visibility-sensor"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)

  const homeRef = useRef()
  const aboutMeRef = useRef()
  const projectsRef = useRef()
  const algorithmsRef = useRef()
  const contactMeRef = useRef()

  return (
    <section
      style={{
        // position: "absolute",
        // top: "0.5px",
        // left: 0,
        // right: 0,
        // bottom: "0.5px",
        overflowX: "hidden" /* or any other value */,
        // overflowY: "scroll" /* or any other value */,
      }}
    >
      <Navbar
        sections={[
          homeRef,
          aboutMeRef,
          projectsRef,
          algorithmsRef,
          contactMeRef,
        ]}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HomeSection propRef={homeRef}>
        <VisibilitySensor
          onChange={isVisible => {
            isVisible && setActiveSection(0)
            return
          }}
          delayedCall
        >
          <div
            style={{
              height: "10rem",
              width: "1rem",
              position: "absolute",
              top: "20%",
            }}
          ></div>
        </VisibilitySensor>
      </HomeSection>

      <AboutSection propRef={aboutMeRef}>
        <VisibilitySensor
          onChange={isVisible => {
            isVisible && setActiveSection(1)
            return
          }}
          delayedCall
        >
          <div
            style={{
              height: "10rem",
              width: "1rem",
              position: "absolute",
              top: "20%",
            }}
          ></div>
        </VisibilitySensor>
      </AboutSection>

      <ProjectsSection propRef={projectsRef}>
        <VisibilitySensor
          onChange={isVisible => {
            isVisible && setActiveSection(2)
            return
          }}
          delayedCall
        >
          <div
            style={{
              height: "10rem",
              width: "1rem",
              position: "absolute",
              top: "20%",
            }}
          ></div>
        </VisibilitySensor>
      </ProjectsSection>
      <AlgoSection propRef={algorithmsRef}>
        <VisibilitySensor
          onChange={isVisible => {
            isVisible && setActiveSection(3)
            return
          }}
          delayedCall
        >
          <div
            style={{
              height: "10rem",
              width: "1rem",
              position: "absolute",
              top: "20%",
            }}
          ></div>
        </VisibilitySensor>
      </AlgoSection>
      {/* <ContactSection propRef={contactMeRef}>
        <VisibilitySensor
          onChange={isVisible => {
            isVisible && setActiveSection(5)
            return
          }}
          delayedCall
        >
          <div
            style={{
              height: "10rem",
              width: "1rem",
              position: "absolute",
              top: "20%",
            }}
          ></div>
        </VisibilitySensor>
      </ContactSection> */}
      <Footer
        sections={[
          homeRef,
          aboutMeRef,
          projectsRef,
          algorithmsRef,
          contactMeRef,
        ]}
        setActiveSection={setActiveSection}
      />
    </section>
  )
}
