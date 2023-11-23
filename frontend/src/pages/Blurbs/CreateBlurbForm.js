// /** Imported all separately to improve wesbite loading time. */
// import React, { useRef, useState } from "react";

// /** Imported all separately to improve wesbite loading time. */
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Alert from "react-bootstrap/Alert";
// import Image from "react-bootstrap/Image";

// import Display from "../../components/Display.js"

// import Upload from "../../assets/images/upload.jpg";

// import styles from "../../styles/BlurbsForm.module.css";
// import appStyles from "../../styles/App.module.css";
// import btnStyles from "../../styles/Button.module.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// // import { useHistory } from "react-router";
// import { axiosReq } from "../../api/axiosDefaults";

// import { useRedirect } from "../../hooks/useRedirect";

// function CreateBlurbForm() {
//   //   useRedirect("loggedOut");

//   /**useState to store errors used. Imported.*/
//   const [errors, setErrors] = useState({});

//   const [blurbData, setBlurbData] = useState({
//     title: "",
//     content: "",
//     // category: "",
//     image: "",
//   });

//   /** Set variables for input value. */
//   const { title, content, image } = blurbData;

//   /** Create ref prop for Form.File. */
//   const imageInput = useRef(null);

//   /** useHistory Hook from React Router. Imported. */
//   /** Handle redirect from React Router. */
//   const history = useHistory();

//   /** Handle change for title, content. */
//   const handleChange = (event) => {
//     setBlurbData({
//       // Access all data without deleting previous item.
//       ...blurbData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   /**Handle change for image content. */
//   const handleChangeImage = (event) => {
//     if (event.target.files.length) {
//       // Image URL removed.
//       URL.revokeObjectURL(image);
//       setBlurbData({

//         // Access all data without deleting previous item.
//         ...blurbData,

//         // Set image to URL set.
//         image: URL.createObjectURL(event.target.files[0]),
//       });
//     }
//   };

//   const handleSubmit = async (event) => {
//     /**Prevent page refresh. */
//     event.preventDefault();
//     /**Create variable to append for each state. */
//     const formData = new FormData();

//     formData.append("title", title);
//     formData.append("content", content);
//     // formData.append("category", category);
//     formData.append("image", imageInput.current.files[0]);

//     // due to multidata.
//     try {
//       /** axios updated to request interceptor and post on url link.*/
//       const { data } = await axiosReq.post("/blurbs/", formData);
//       /**Create further blurbs with appropriate id. */
//       history.push(`/blurbs/${data.id}`);
//     } catch (err) {
//       console.log(err);
//       /** catch errors and set. */
//       if (err.response?.status !== 401) {
//         setErrors(err.response?.data);
//       }
//     }
//   };

//   /** Set Fields for user input */
//   const textFields = (
//     <div className="text-center">

//       {/* Fields for Blurb form. */}
//       <Form.Group>
//         <Form.Label>Title</Form.Label>
//         <Form.Control
//           type="text"
//           name="title"
//           value={title}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       {/* Error for title field and error key changed.*/}
//       {errors?.title?.map((message, idx) => (
//         <Alert variant="warning" key={idx}>
//           {message}
//         </Alert>
//       ))}

//       <Form.Group>
//         <Form.Label>Content</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={8}
//           name="content"
//           value={content}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       {/* Error for content field and error key changed.*/}
//       {errors?.content?.map((message, idx) => (
//         <Alert variant="warning" key={idx}>
//           {message}
//         </Alert>
//       ))}

//       {/* <Form.Group>
//                 <Form.Label>Category</Form.Label>
//                 <Form.Control
//                     as="textarea"
//                     rows={6}
//                     name="category"
//                     value={category}
//                     onChange={handleChange}
//                 />
//             </Form.Group>
//             {errors?.content?.map((message, idx) => (
//                 <Alert variant="warning" key={idx}>
//                     {message}
//                 </Alert>
//             ))} */}

//       {/* Button will redirect back page with no changes if cancelled. */}
//       <Button
//         className={btnStyles.Button}
//         onClick={() => history.goBack()}
//       >
//         Cancel
//       </Button>
//       {/** Button creates new blurb no submit. */}
//       <Button className={btnStyles.Button} type="submit">
//         Save new article.
//       </Button>
//     </div>
//   );

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Row>
//         <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
//           <Container
//             className={styles.Container}
//           >
//             <Form.Group className="text-center">
//               {/* Set first option in terinary condition if image present, 
//                             otherwise set second option after :*/}
//               {image ? (
//                 <>
//                   <figure>

//                     {/* Bootstrap Image component. */}
//                     <Image className={appStyles.Image} src={image} rounded />
//                   </figure>
//                   <div>
//                     <Form.Label
//                       className={btnStyles.Button}

//                       /** Link to id in Form.File for uploading image */
//                       htmlFor="image-upload"
//                     >
//                       Change the image
//                     </Form.Label>
//                   </div>
//                 </>
//               ) : (
//                 <Form.Label
//                   className={btnStyles.Button}

//                   /** Link to id in Form.File for uploading image */
//                   htmlFor="image-upload"
//                 >
//                   <Display
//                     src={Upload}
//                     message="Click Image to Upload a new one."
//                   />
//                 </Form.Label>
//               )}

//               <Form.File

//                 /** Link to htmlFor in Form.Label for uploading image */
//                 id="image-upload"
//                 accept="image/*"
//                 onChange={handleChangeImage}
//                 ref={imageInput}
//               />
//             </Form.Group>

//             {/**Error caught, Alert messge shown to user. */}
//             {errors?.image?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}

//             {/* Returned value of const textField. */}
//             <div className="d-md-none">{textFields}</div>
//           </Container>
//         </Col>
//         <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">

//           {/* Returned value of const textField. */}
//           <Container>{textFields}</Container>
//         </Col>
//       </Row>
//     </Form>
//   );
// }

// export default CreateBlurbForm;
