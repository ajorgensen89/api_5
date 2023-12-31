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
import { useHistory } from "react-router";
// import { Rating } from "react-simple-star-rating" 

// User can send a form to the admin as feedback or with questions.
const CreateReviewForm = (props) => {
    // const { review, profile_id, profileImage, setReviews } = props
    const { profile_id, profileImage } = props
    useRedirect("loggedOut");
    const [content, setContent] = useState("");
    const [review, setReviews] = useState([]);

    // Use history hook to go back to profile page to see user review chat.
    const history = useHistory();

    // Set initial rating value to 0.
    // const [rating, setRating] = useState(0)

    // const handleRating = (rate) => {
    //     setRating(rate / 5);
    // };

    // const handleReset = () => {
    //     setRating(0)
    // }

    // Handle change for contact data.
    const handleChange = (event) => {
        setContent(event.target.value);
    }

    // Handle submission of reviewed data and post by axios request 
    // with the new data from the form.
    // Submitting form from within return statement.
    const handleSubmit = async (event) => {
        // Added handlesubmit logic to default behaviour.
        try {
            // Pst response make to API /reviews/
            console.log("logged", props.reviews)
            // console.log("errorProfile:", review)
            // console.log("errorContent:", content)
            const { data } = await axiosRes.post("/reviews/", {
                review,
                content,
            });
            history.goBack();
            setReviews({ ...props.reviews, results: [...props.reviews.results, data] });
            setContent("");

            setTimeout(() => {
                console.log(props.reviews)
            }, 2000)
        } catch (err) {
            console.log(err, "reviewHS");
            console.log(err.response)
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
                            <p>
                                <Form.Control
                                    placeholder="Tap here to chat..."
                                    as="textarea"
                                    value={content}
                                    onChange={handleChange}
                                    row={2}
                                ><Link to={`/profiles/${profile_id}`}>
                                        <Avatar src={profileImage} />
                                    </Link></Form.Control>
                            </p>
                        </InputGroup>
                    </Form.Group>
                    {/* <Form.Group>
                        <Rating  onClick={handleRating}/>
                    </Form.Group> */}
                    <Button
                        className={btnStyles.Button}
                        // disabled={!content.trim()}
                        type="submit"
                    >
                        Chat!
                    </Button>

                </Form>
            </Container>
        </div>
    )
}

export default CreateReviewForm;