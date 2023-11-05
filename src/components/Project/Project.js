import React, { useState } from "react"
import * as styles from "./project.module.scss"
import Img from "gatsby-image"
import { AiFillEye, AiFillGithub, AiOutlineLink } from "react-icons/ai"
import VideoComponent from "../VideoComponent/VideoComponent"

const Project = ({ project }) => {
  const image = project.thumb.childImageSharp.fluid

  const [videoVisible, setVideoVisible] = useState(false)

  return (
    <>
      {videoVisible && (
        <VideoComponent
          videoSrcURL={project.videoLink}
          videoTitle={project.title}
          setVideoVisible={setVideoVisible}
        />
      )}

      <div className={styles.project}>
        <Img fluid={image} className={styles.imgWrapper} />
        <h3>{project.title}</h3>
        <div className={styles.links}>
          {project.githubLink !== "" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              title="View on Github"
            >
              <div className={styles.iconWrapper}>
                <AiFillGithub size={35} />
              </div>
            </a>
          )}
          {project.hasDomen ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              title={
                project.tempDown
                  ? "Sory this site is currently down"
                  : "Chek out live"
              }
              className={project.tempDown ? styles.disabled : ""}
            >
              <div className={styles.iconWrapper}>
                <AiOutlineLink size={35} />
              </div>
            </a>
          ) : (
            project.videoLink !== "" && (
              <button
                className={styles.iconWrapper}
                title="Video of the website"
                onClick={() => setVideoVisible(true)}
              >
                <AiFillEye size={35} />
              </button>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Project
