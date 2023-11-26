import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css"

import styles from "../../styles/CommentContent.module.css";

/** Credit to creating within project, building this from Code Institute coursework 
 * and redeveloped. */

/** Edit comments */

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments } = props;
  
    const [formContent, setFormContent] = useState(content);
  
    const handleChange = (event) => {
      setFormContent(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        console.log("cserror111formContent", formContent)
        await axiosRes.put(`/comments/${id}/`, {
          content: formContent.trim(),
        });
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.map((comment) => {
            return comment.id === id
              ? {
                  ...comment,
                  content: formContent.trim(),
                  updated_at: "now",
                }
              : comment;
          }),
        }));
        setShowEditForm(false);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="pr-1">
          <Form.Control
            className={styles.Form}
            as="textarea"
            value={formContent}
            onChange={handleChange}
            rows={2}
          />
        </Form.Group>
        <div className="text-right">
          <button
            className={btnStyles.Button}
            onClick={() => setShowEditForm(false)}
            type="button"
          >
            cancel
          </button>
          <button
            className={btnStyles.Button}
            disabled={!content.trim()}
            type="submit"
          >
            save
          </button>
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