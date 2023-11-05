import React from "react"
import * as styles from "./videoComponent.module.scss"
import { AiFillCloseCircle } from "react-icons/ai"
import CircleTitle from "./../CircleTitle/CircleTitle"

const VideoComponent = ({ videoSrcURL, videoTitle, setVideoVisible }) => {
  return (
    <div className={styles.background}>
      <div className={styles.video}>
        <CircleTitle txtColor={"#F5F5F5"} circleColor={"#044962"}>
          {videoTitle}
        </CircleTitle>
        <button onClick={() => setVideoVisible(false)}>
          <div className={styles.iconWrapper}>
            <AiFillCloseCircle size={35} />
          </div>
        </button>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </div>
  )
}
export default VideoComponent
