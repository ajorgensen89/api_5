import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import styles from "../../styles/App.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "bootstrap";
import btnStyles from "../../styles/Button.module.css"
import { Button, Form } from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";

// User can send a form to the admin as feedback or with questions.
const CreateContactForm = () => {
    useRedirect("loggedOut");

    //const [message, setMessage] = useState('')

    // Use state state on contact data to manipulate data.
    const [contactData, setContactData] = useState({
        topic: "",
        content: "",
    });

    const history = useHistory();

    // Set error catching
    const [errors, setErrors] = useState({});

    // Set variables for contact data.
    const { topic, content } = contactData;

    
    // Handle change for contact data.
    const handleChange = (event) => {
        setContactData({
            // Spread contact data and access the value of the name key.
            ...contactData,
            [event.target.name]: event.target.value,
        })
    }

    // Handle submission of contact data and post by axios request 
    // with the new data from the form. Sent to admin for feedback.
    // To submit form in return statement.
    const handleSubmit = async (event) => {
        // Prevent page refresh when user interacts.
        event.preventDefault();
        const formData = new FormData();

        formData.append("topic", topic);
        formData.append("content", content);

        try {
            await axiosReq.post("/contacts/", formData);
            //setMessage("Thanks for sharing feedback!");
            // reset();
            // On submit go back to previous page.
            history.goBack();
            
        } catch (err) {
            console.log("newbie1 contacts POST")
            setErrors(err.response?.data);
        }
    }

     /** Set Fields for user input */
     const textInputFields = (
        <div className="text-center">

            {/* Fields for Contact form. */}
            <Form.Group>
                <Form.Label>User Feedback Form</Form.Label>
                {/* Form topic/title with value of topic set
                with change topic value handler. */}
                <Form.Control
                    type="text"
                    name="topic"
                    value={topic}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* If empty, error for title field and error key changed.*/}
            {errors?.topic?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={8}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* If empty, error for content field and error key changed.*/}
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            {/* Button will redirect back page with no changes if cancelled. */}
            <Button
                className={btnStyles.Button}
                onClick={() => history.goBack()}
            >
                Cancel
            </Button>
            {/** Button creates a form sent to admin on submit. */}
            <Button className={btnStyles.Button} type="submit">
                Send Message.
            </Button>
        </div>
    );

    return (
        <div>
            <Container className={styles.ContainerContent}>
                {/* Sent form to admin on submit. */}
                <Form onSubmit={handleSubmit}>
                    <Container>
                        {textInputFields}
                    </Container>
                </Form>
            </Container>
        </div>
    )
}

export default CreateContactForm;