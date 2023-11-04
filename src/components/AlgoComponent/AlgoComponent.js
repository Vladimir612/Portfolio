import React, { useState } from "react"
import * as styles from "./algoComponent.module.scss"
import Img from "gatsby-image"

import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { FaBookOpen } from "react-icons/fa"
import VideoComponent from "../VideoComponent/VideoComponent"

const AlgoComponent = ({ algo }) => {
  const image = algo.thumb.childImageSharp.fluid

  const [videoVisible, setVideoVisible] = useState(false)

  return (
    <div>
      {videoVisible && (
        <VideoComponent
          videoSrcURL={algo.video}
          videoTitle={algo.title}
          setVideoVisible={setVideoVisible}
        />
      )}
      <div className={styles.algoWrapper}>
        <Img fluid={image} className={styles.imgWrapper} />
        <h3>{algo.title}</h3>
        <div className={styles.links}>
          <a
            href={algo.githubLink}
            target="_blank"
            rel="noreferrer"
            title="View on Github"
          >
            <div className={styles.iconWrapper}>
              <AiFillGithub size={35} />
            </div>
          </a>
          <button
            className={styles.iconWrapper}
            title="Video of solution"
            onClick={() => setVideoVisible(true)}
          >
            <AiFillEye size={35} />
          </button>
          <a
            href={algo.explainLink}
            target="_blank"
            rel="noreferrer"
            title="Explanation"
          >
            <div className={styles.iconWrapper}>
              <FaBookOpen size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AlgoComponent
