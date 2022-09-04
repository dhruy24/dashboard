import React from 'react'
import classnames from 'classnames';
import style from '../../styles/toggleButton.module.css'

function ToggleButton() {
  return (
    <div>
        <label className={style.switch}>
        <input type="checkbox"></input>
        <span className={classnames(style.slider, style.round)}></span>
        </label>
    </div>
  )
}

export default ToggleButton