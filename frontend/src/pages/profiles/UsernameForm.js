import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/App.module.css";

// Credit from Code Institute project Moments and updated.

const UsernameForm = () => {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({});

    const history = useHistory();
    const { id } = useParams();

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() => {
        // Convert id number to s string to check the logged in user owns the profile with the same id.
        if (currentUser?.profile_id?.toString() === id) {
            setUsername(currentUser.username);
        } else {
            // User gets redircted if they do not own the profile with the right id.
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put("/dj-rest-auth/user/", {
                username,
            });
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
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
                    <Form onSubmit={handleSubmit} className="my-2">
                        <Form.Group>
                            <Form.Label>Change username</Form.Label>
                            <Form.Control
                                placeholder="username"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </Form.Group>
                        {errors?.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Button
                            className={btnStyles.Button}
                            onClick={() => history.goBack()}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={btnStyles.Button}
                            type="submit"
                        >
                            Save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UsernameForm;