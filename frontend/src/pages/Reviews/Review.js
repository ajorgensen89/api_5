import React from "react";
import styles from "../../styles/App.module.css";
import { Container, Media, NavLink } from "react-bootstrap";
import Avatar from "../../components/Avatar";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Review = (props) => {
    const {
        // profile_id,
        content,
        updated_at,
        profile,
        // reviewPage,
        // rating,

    } = props;
    // Get fields for profile prop to use.
    const { id, image, owner } = profile;

    // const [showReviewForm, setReviewForm] = useState(false);
    // const currentUser = useCurrentUser();
    // const setCurrentUser = useCurrentUser();
    // const is_owner = currentUser?.username === owner;

    return (
        <>
            <hr />
            <Media>
                <NavLink to={`/profiles/${id}`}>
                <Avatar src={image} text="Profile" height={35} />
                    <div>{owner}</div>
                </NavLink>
                <Media.Body>
                    <span className={styles.OwnerName}>{owner}</span>
                    <span className={styles.UpdatedDate}>{updated_at}</span>
                    {/* {showEditForm ? (
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
                    )} */}
                    <Container>Review:{content}</Container>
                    <Container>Rating:</Container>
                </Media.Body>
                {/* {is_owner && !showEditForm && (
                    // DropDownMenu Icon shown and used for editing and deleting comments. 
                    // Same as blurb.
                    // Props passed are edit and delete handlers.
                    <DropDownMenu
                        // Pass handle edit function to handle edit using setShowEditForm
                        // from EditCommentForm.js
                        handleEditing={() => setShowEditForm(true)}
                        // Pass handle delete function to handle delete prop.
                        handleDeleting={handleDeleting}
                    />
                )} */}
            </Media>
        </>
    );
};

export default Review;