import React from 'react'
import styles from './Button.module.css'


const Button = (props) => {
    const {isOutLine,text, icon, ...rest}=props;
    console.log(props)
  return (
    <div className={`container ${styles.container}`}>
   <button {...rest} className={isOutLine ? styles.btn_secodary: styles.btn_primary}>{icon}
    {text}
   </button>
    </div>
  )
}

export default Button
