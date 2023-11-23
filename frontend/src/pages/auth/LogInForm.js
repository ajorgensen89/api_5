import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SigningForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../styles/App.module.css";
// import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// import { useRedirect } from "../../hooks/useRedirect";
// import { setTokenTimestamp } from "../../utils/utils";
import { useSetCurrentUserContext } from "../../contexts/CurrentUserContext";

function LogInForm() {

    /**useState to store errors used. Imported.*/
    const [errors, setErrors] = useState({});
    
    /**Refactor and use Hooks instead of useContext. */
    /**Hooks in CurrentUserContext.js. */
    /** Set useSetCurrentUserContext variable to update user on successful log in. */

    const setCurrentUser = useSetCurrentUserContext();

    // useRedirect("loggedIn");

    const [logInData, setLogInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = logInData;

    

    const history = useHistory();

    /** Handle event to Log in with user data. */
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post("/dj-rest-auth/login/", logInData);
            /** Save user data in variable on successful log in. */
            setCurrentUser(data.user);
            console.log("login /login/")
            // setTokenTimestamp(data);
            history.push("/");
            // history.goBack();
        } catch (err) {
            console.log(err, "errsetErrorslogin")
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setLogInData({
            /** Spread objects to get all values. */
            ...logInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row>
            <Row>
                <Col className={appStyles.ColText}>
                    <Container className={`${appStyles.Border} ${appStyles.CenterText} ${styles.Header}`} >
                        <h1 className={styles.Header}>sign in</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label className="d-none">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    className={styles.Input}
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.username?.map((message, idx) => (
                                <Alert key={idx} variant="warning">
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group controlId="password">
                                <Form.Label className="d-none">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className={styles.Input}
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password?.map((message, idx) => (
                                <Alert key={idx} variant="warning">
                                    {message}
                                </Alert>
                            ))}
                            <Button
                                className={btnStyles.Button}
                                type="submit"
                            >
                                Sign in
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (
                                <Alert key={idx} variant="warning" className="mt-3">
                                    {message}
                                </Alert>
                            ))}
                        </Form>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col className={appStyles.ColText}>
                    <Container className={`${appStyles.Border} ${appStyles.CenterText}`} >
                        <Link className={styles.Link} to="/signup">
                            Don't have an account? <span>Sign up now!</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className={appStyles.ColImage}>
                    <Image
                        className={`${appStyles.FillerImage} ${appStyles.CenterText}`}
                        src={"https://res.cloudinary.com/dtsaa4qbs/image/upload/v1688082376/g4ha4dejebjbmmwul6gv.png"}
                    />
                </Col>
                <Col></Col>
            </Row>

        </Row >
    );
}

export default LogInForm;