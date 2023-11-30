import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import styles from "../../styles/App.module.css";
//import { useHistory, useParams } from "react-router";
import { axiosRes } from "../../api/axiosDefaults";
//import { Alert } from "bootstrap";
import btnStyles from "../../styles/Button.module.css"
import { Button, Form, InputGroup } from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";

// User can send a form to the admin as feedback or with questions.
const CreateReviewForm = (props) => {
    const { review, profile_id, profileImage, setReviews } = props
    useRedirect("loggedOut");
    const [content, setContent] = useState("");

    // Set initial rating value to 0.
    // const [rating, setRating] = useState(0)

    // const handleRating = (event) => {
    //     setRating(rate / 5);
    // };

    // Handle change for contact data.
    const handleChange = (event) => {
        setContent(event.target.value);
    }

    // Handle submission of reviewed data and post by axios request 
    // with the new data from the form.
    // Submitting form from within return statement.
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // POst response make to API /reviews/
            const { data } = await axiosRes.post("/reviews/", {
                review,
                content,
            });
            setReviews((prevReview) => ({
                ...prevReview,
                results: [data, ...prevReview.results],
            }));
            setContent("");
        } catch (err) {
            console.log(err, "reviewHS");
        }
    }

    return (
        <div>
            <Container className={styles.ContainerContent}>
                {/* Sent form to admin on submit. */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <InputGroup>
                            <Link to={`/profiles/${profile_id}`}>
                                <Avatar src={profileImage} />
                            </Link>
                            <Form.Control
                                placeholder="Leave a review of this user!"
                                as="textarea"
                                value={content}
                                onChange={handleChange}
                                row={2}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Button
                        className={btnStyles.Button}
                        disabled={!content.trim()}
                        type="submit"
                    >
                        Save review
                    </Button>

                </Form>
            </Container>
        </div>
    )
}

export default CreateReviewForm;