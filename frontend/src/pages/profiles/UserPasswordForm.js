import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/App.module.css";

// Credit from Code Institute project Moments and updated.

const UserPasswordForm = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    // Set states for new passwords for comparing inputs.
    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });

    // set both passwords to userData.
    const { new_password1, new_password2 } = userData;

    const [errors, setErrors] = useState({});

    // Spread userData and set the values for change.
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        // Convert id number to a string to check the logged in 
        // user owns the profile with the same id.
        if (currentUser?.profile_id?.toString() !== id) {
            // Redirect user who do not own the profile with matching id.
            history.push("/");
        }
        // Pass useEffect dependancies for when to change.
    }, [currentUser, history, id]);

    // Handle submission and post axios request to change user data.
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData);
            history.goBack();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container className={styles.ContainerContent}>
                    {/* Handle submission for the changes made to password. */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            {/* Handle changes and save new passwords if they both match
                            on submit button click. */}
                            <Form.Control
                                placeholder="new password"
                                type="password"
                                value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                            />
                        </Form.Group>
                        {/* Set errors if password do not match. */}
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                placeholder="confirm new password"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                            />
                        </Form.Group>
                        {/* Set errors if password do not match. */}
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Button
                            className={btnStyles.Button}
                            onClick={() => history.goBack()}
                        >
                            cancel
                        </Button>
                        {/* Submit the changes using button. */}
                        <Button
                            type="submit"
                            className={btnStyles.Button}
                        >
                            save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UserPasswordForm;