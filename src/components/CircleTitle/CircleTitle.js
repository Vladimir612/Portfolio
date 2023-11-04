import React from "react"
import * as styles from "./circleTitle.module.scss"

const CircleTitle = props => {
  const txtStyle = {
    color: props.txtColor,
  }

  const circleStyle = {
    background: props.circleColor,
  }

  return (
    <div className={styles.heading}>
      <h2 style={txtStyle}>{props.children}</h2>
      <div style={circleStyle} className={styles.circle}></div>
    </div>
  )
}

export default CircleTitle
