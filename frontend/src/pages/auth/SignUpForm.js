import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

import appStyles from "../../styles/App.module.css";
import btnStyles from "../../styles/Button.module.css"
import styles from "../../styles/SigningForm.module.css"

// import Form from "react-bootstrap/Form";
import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/**Store values in useState Hook imported from React. */


const SignUpForm = () => {
    // useRedirect("loggedIn");

    /**Set for controlID in Form.Group fields. */
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const { username, password1, password2 } = signUpData;

    /**useState to store errors used. Imported.*/

    const [errors, setErrors] = useState({});

    /** useHistory Hook from React Router. Imported.*/
    /** Handle redirect from React Router. */

    const history = useHistory();


    /**Universal onChange handler for input fields.*/
    /**JavaScript KEY: VALUE =  input field name: user's input.*/
    /** Add handler to each component to allow changes.*/

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    /**Import Axios */
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if username is empty
        if (!username.trim()) {
            setErrors({ ...errors, username: ["Username cannot be empty"] });
            return;
        }
        // Check if password is empty
        if (!password1.trim()) {
            setErrors({ ...errors, password1: ["password field empty"] });
            return;
        }
        // Check if password confirmed is empty
        if (!password2.trim()) {
            setErrors({ ...errors, password2: ["confirm password field empty"] });
            return;
        }
        // Otherwise POST data to API and signin.
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };
    


    return (
        <Row>
            <Row>
                <Col md={2} ></Col>
                <Col md={8} className={appStyles.ColImage}>
                    <Image
                        className={`${appStyles.FillerImage} ${appStyles.CenterText}`}
                        src={"https://res.cloudinary.com/dtsaa4qbs/image/upload/v1700138414/avatar_beedw9.jpg"}
                    />
                </Col>
                <Col md={2} ></Col>

            </Row>
            <Row>
                <Col className={appStyles.ColText}>
                    <Container className={`${appStyles.Border} ${appStyles.CenterText} ${styles.Header}`}>
                        <h1>
                            Sign Up Here!
                        </h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label className="d-none">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    className={styles.Input}
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            {/* Optional chaining (?). Map over all errors in state. If error in object, produce alert. Alert imported. */}
                            {errors.username?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>{message}</Alert>
                            ))}

                            <Form.Group controlId="password1">
                                <Form.Label className="d-none">Password</Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="password"
                                    placeholder="Password"
                                    name="password1"
                                    value={password1}
                                    onChange={handleChange}

                                />
                            </Form.Group>

                            {/* Optional chaining (?). Map over all errors in state. If error in object, produce alert. */}
                            {errors.password1?.map((message, idx) => (
                                <Alert key={idx} variant="warning">
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group controlId="password2">
                                <Form.Label className="d-none">Confirm password</Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="password"
                                    placeholder="Confirm password"
                                    name="password2"
                                    value={password2}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            {/* Optional chaining (?). Map over all errors for each key(idx) in error state. 
                            If error in object, produce alert. */}
                            {errors.password2?.map((message, idx) => (
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
                            {/** When 2 passwords dont match */}
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
                    <Container className={`${appStyles.Border} ${appStyles.CenterText}`}>
                        Already Signed up..
                        <Link className={styles.Link} to="/signin">
                            <span>Sign in</span>
                        </Link>
                    </Container>
                </Col>

            </Row>
        </Row>
    );
};

export default SignUpForm;