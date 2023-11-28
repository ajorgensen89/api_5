import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css"
import Button from "react-bootstrap/esm/Button";

// import styles from "../../styles/CommentContent.module.css";

/** Credit to creating within project, 
 * building this from Code Institute coursework and redeveloped. */

/** Edit comments */

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments } = props;
    
    // Set form with content of comment to be edited.
    const [formContent, setFormContent] = useState(content);
  
    const handleChange = (event) => {
      // Change form data with onChange event within React Form.
      // Set in Form Control.
      setFormContent(event.target.value);
    };
  
    // Creat handle submit for React Form.
    const handleSubmit = async (event) => {
      // Prevtn page refresh.
      event.preventDefault();
      try {
        // Handle submission of form content data.
        console.log("cserror111formContent", formContent)
        console.log("cserror111content", content)
        // Pu in axios request to edit new comments content.
        await axiosRes.put(`/comments/${id}/`, {
          // Trim whitespace from new content.
          content: formContent.trim(),
        });
        // Set comments, spread previous comments to display the new results of comments.
        setComments((prevComments) => ({
          ...prevComments,
          // Map over each spread comment and set it to a parameter of comments.
          results: prevComments.results.map((comments) => {
            // Return to comment with the matching id with the new content if changed,
            // Otherwise, return original comment with previous content.
            return comments.id === id
              ? {
                // Spread comments and set new content to edited formContent.
                // Trim whitespace.
                  ...comments,
                  content: formContent.trim(),
                  updated_at: "now",
                }
              : comments;
          }),
        }));
        // Show edit comment form only when user is logged in so set to false here.
        console.log("new", content)
        console.log("new2", formContent)
        setShowEditForm(false);
      } catch (err) {
        // If error, show error.
        console.log("err", err);
      }
    };
  
    return (
      // React Form used for comment submission.
      <Form onSubmit={handleSubmit}>
        <Form.Group className="pr-1">
          <Form.Control
          
          // Set prop for type of input field.
            as="textarea"
            // Set comment form value to the form content provided by user.
            value={formContent}
            // Set comment state with onChange handler.
            onChange={handleChange}
            rows={2}
          />
        </Form.Group>
        <div className="text-right">
          <button
            className={btnStyles.Button}
            // Return with no changes.
            onClick={() => setShowEditForm(false)}
            type="button"
          >
            cancel
          </button>
          
          
          <Button
            className={btnStyles.Button}
            value={formContent}
            // disabled={!content.trim()}
            type="submit"
          >
            save
            </Button>
        </div>
      </Form>
    );
  }
  
  export default CommentEditForm;

// function EditCommentForm(props) {
//     const { id, content, setVisibleEditForm, setComments } = props;
  
//     const [formContent, setFormContent] = useState(content);
  
//     const handleChange = (event) => {
//       setFormContent(event.target.value);
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         console.log("cserror1")
//         await axiosRes.put(`/comments/${id}/`, {
//           content: formContent.trim(),
//         });
//         console.log("cserror2")
//         setComments((prevComments) => ({
//           ...prevComments,
//           results: prevComments.results.map((comment) => {
//             return comment.id === id
//               ? {
//                   ...comment,
//                   content: formContent.trim(),
//                   updated_at: "now",
//                 }
//               : comment;
//           }),
//         }));
//         console.log("cserror3")
//         setVisibleEditForm(false);
//       } catch (err) {
//         console.log(err);
//       }
//     };
  
//     return (
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="pr-1">
//           <Form.Control
//             className={styles.Form}
//             as="textarea"
//             value={formContent}
//             onChange={handleChange}
//             rows={2}
//           />
//         </Form.Group>
//         <div className="text-right">
//           <button
//             className={btnStyles.Button}
//             onClick={() => setVisibleEditForm(false)}
//             type="button"
//           >
//             cancel
//           </button>
//           <button
//             className={btnStyles.Button}
//             disabled={!content.trim()}
//             type="submit"
//           >
//             save
//           </button>
//         </div>
//       </Form>
//     );
//   }
  
//   export default EditCommentForm;


// function EditCommentForm(props) {
//     const { id, content, setEditCommentForm, setComments } = props;

//     /** Set state to edit with the comments contents in state. */
//     const [formContent, setFormContent] = useState(content);

//     const handleChange = (event) => {
//         setFormContent(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await axiosRes.put(`/comments/${id}/`, {
//                 content: formContent.trim(),
//             });
//             setComments((prevComments) => ({
//                 ...prevComments,
//                 results: prevComments.results.map((comment) => {
//                     return comment.id === id
//                         ? {
//                             ...comment,
//                             content: formContent.trim(),
//                             updated_at: "now",
//                         }
//                         : comment;
//                 }),
//             }));
//             setEditCommentForm(false);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="pr-1">
//                 <Form.Control
//                     className={styles.ContentText}
//                     as="textarea"
//                     value={formContent}
//                     onChange={handleChange}
//                     rows={2}
//                 />
//             </Form.Group>
//             <div className="text-right">
//                 <button
//                     className={btnStyles.Button}
//                     onClick={() => setEditCommentForm(false)}
//                     type="button"
//                 >
//                     Cancel changes
//                 </button>
//                 <button
//                     className={btnStyles.Button}
//                     disabled={!content.trim()}
//                     type="submit"
//                 >
//                     Save the Comment
//                 </button>
//             </div>
//         </Form>
//     );
// }

// export default EditCommentForm;