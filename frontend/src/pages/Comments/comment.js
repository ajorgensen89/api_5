import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { DropDownMenu } from "../../components/DropDownMenu";
import styles from "../../styles/CommentContent.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { axiosRes } from "../../api/axiosDefaults";
// import EditCommentForm from "./EditCommentForm";
import CommentEditForm from "./EditCommentForm";
/** Credit to creating within project, building this from Code Institute coursework 
 * and redeveloped. */

const CommentContent = ({ profile_image, profile_id, owner, content, updated_at, setComments, setBlurb, id }) => {

    // State to toggle Edit form for comments.
    // const [editCommentForm, setEditCommentForm] = useState(false);
    // const [visibleEditForm, setVisibleEditForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    // Set current user context.
    const currentUser = useCurrentUser();

    // Check if owner is currently logged in use who owns the comment for edit and deleting permission.
    const is_owner = currentUser?.username === owner;

    // Handler for deleting comment with try catch block.
    const handleDeleting = async () => {
        try {
            // Use Axios response instance to make delete request to comment url with particular id.
            await axiosRes.delete(`/comments/${id}/`)
            setBlurb((prevBlurb) => ({
                results: [
                    {
                        // Spread setblurb objects results and reduce comment count by 1
                        ...prevBlurb.results[0],
                        comments_count: prevBlurb.results[0].comments_count - 1,
                    },
                ],
            }))
            setComments((prevComments) => ({
                // Spread comments results.
                ...prevComments,
                // Filter through and check if comment with id no longer exists, 
                // return array without the removed comment.
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body>
                    <span className={styles.OwnerName}>{owner}</span>
                    <span className={styles.UpdatedDate}>{updated_at}</span>
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p className={styles.CommentText}>{content}</p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    // DropDownMenu Icon shown and used for editing and deleting comments. 
                    // Same as blurb.
                    // Props passed are edit and delete handlers.
                    <DropDownMenu
                        // Pass handle edit function to handle edit prop.
                        handleEditing={() => setShowEditForm(true)}
                        // Pass handle delete function to handle delete prop.
                        handleDeleting={handleDeleting}
                    />
                )}
            </Media>
        </>
    );
};

export default CommentContent;