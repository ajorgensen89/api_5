import React from 'react'
import NoResults from "../assets/images/Nothing.jpg"
import Display from './Display'
import styles from "../styles/Display.module.css"
import appStyles from "../styles/App.module.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const PageNotFound = () => {
    return (
        <div className={styles.PageNotFound}>
            <Display
                src={NoResults}
                message={"Sorry, page does not exist!"}
                imageSize={250}

            />
            <Container className={`${appStyles.Border} ${appStyles.CenterText}`} >
                <Link className={styles.Link} to="/signup">
                    Don't have an account? <span>Sign up now!</span>
                </Link>
            </Container>
        </div>
    )
}

export default PageNotFound;