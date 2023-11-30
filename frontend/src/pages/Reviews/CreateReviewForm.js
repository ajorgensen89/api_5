// import React, { useState } from "react";
// import Container from "react-bootstrap/esm/Container";
// import styles from "../../styles/App.module.css";
// import { useHistory, useParams } from "react-router";
// import { axiosReq } from "../../api/axiosDefaults";
// import { Alert } from "bootstrap";
// import btnStyles from "../../styles/Button.module.css"
// import { Button, Form } from "react-bootstrap";
// import { useRedirect } from "../../hooks/useRedirect";

// // User can send a form to the admin as feedback or with questions.
// const CreateReviewForm = () => {
//     useRedirect("loggedOut");
//     // const { profile_id, profileImage } = this.props.first

//     // Used for profile id.
//     const { id } = useParams();

//     // Use state state on contact data to manipulate data.
//     const [reviewData, setReviewData] = useState({
//         // profile: id,
//         content: "",
//     });

//     const history = useHistory();

//     // Set error catching
//     const [errors, setErrors] = useState({});

//     // Set variables for contact data.
//     const { profileId, content } = reviewData;

//     // Set initial rating value to 0.
//     // const [rating, setRating] = useState(0)

//     // const handleRating = (event) => {
//     //     setRating(rate / 5);
//     // };


//     // Handle change for contact data.
//     const handleChange = (event) => {
//         setReviewData({
//             // Spread contact data and access the value of the name key.
//             ...reviewData,
//             [event.target.name]: event.target.value,
//         });
//     };

//     // Handle submission of reviewed data and post by axios request 
//     // with the new data from the form.
//     // Submitting form from within return statement.
//     const handleSubmit = async (event) => {
//         // Prevent page refresh when user interacts.
//         event.preventDefault();
//         const formData = new FormData();

//         // formData.append("profile", profileId);
//         formData.append("content", content);

//         try {
//             await axiosReq.post("/reviews/", formData);
//             // On submit go back to previous page.
//             history.goBack();
//             // <Alert></Alert>
//         } catch (err) {
//             console.log("newbie1 review POST")
//             setErrors(err.response?.data);
//         }
//     }

//     /** Set Fields for user input */
//     const textInputFields = (
//         <div className="text-center">

//             {/* <Form.Group>
//                 <Form.Label>Rating!</Form.Label>
//                 Form topic/title with value of topic set
//                 with change topic value handler.
//                 <Form.Control
//                     type="text"
//                     name="topic"
//                     value={topic}
//                     onChange={handleRating}
//                 />
//             </Form.Group> */}

//             {/* Fields for Review form. */}
//             <Form.Group>
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                     as="textarea"
//                     rows={8}
//                     name="content"
//                     value={content}
//                     onChange={handleChange}
//                 />
//             </Form.Group>

//             {/* If empty, error for content field and error key changed.*/}
//             {errors?.content?.map((message, idx) => (
//                 <Alert variant="warning" key={idx}>
//                     {message}
//                 </Alert>
//             ))}

//             {/* Button will redirect back page with no changes if cancelled. */}
//             <Button
//                 className={btnStyles.Button}
//                 onClick={() => history.goBack()}
//             >
//                 Cancel
//             </Button>
//             {/** Button creates a form sent to admin on submit. */}
//             <Button className={btnStyles.Button} type="submit">
//                 Save Review.
//             </Button>
//         </div>
//     );

//     return (
//         <div>
//             <Container className={styles.ContainerContent}>
//                 {/* Sent form to admin on submit. */}
//                 <Form onSubmit={handleSubmit}>
//                     <Container>
//                         {textInputFields}
//                     </Container>
//                 </Form>
//             </Container>
//         </div>
//     )
// }

// export default CreateReviewForm;