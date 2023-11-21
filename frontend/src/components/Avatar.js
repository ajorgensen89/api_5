import React from "react";
import styles from "../styles/Avatar.module.css"

/** Will always take source, text, height set default to 40px. */
const Avatar = (props) => {
    const {src, height=40, text} = props;
    return <span>
            
            <img className={styles.Avatar} src={src} height={height} width={height} alt="Avatar in square shape" />
            {text}
        </span>
    
};

export default Avatar