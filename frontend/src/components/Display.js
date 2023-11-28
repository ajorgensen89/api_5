import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Display.module.css";

const Display = (props) => {
    const { spinner, src, message, imageSize=200 } = props;
    return (
        <div className={`${styles.Display} p-4`}>
            {/* First && checks if prop exsits before displaying. */}
            {spinner && <Spinner animation="border" variant="success" />}
            {src && <img alt={message} src={src} height={imageSize}/>}
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
};

export default Display;