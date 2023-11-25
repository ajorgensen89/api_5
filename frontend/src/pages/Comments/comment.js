import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { DropDownMenu } from "../../components/DropDownMenu";
import styles from "../../styles/CommentContent.module.css"

/** Credit to creating within project, building this from Code Institute coursework */

const CommentContent = ({ profile_image, profile_id, owner, content, updated_at }) => {
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
                        <p>{content}</p>
                    )} */}
                    <p className={styles.CommentText}>{content}</p>
                </Media.Body>
                {/* {is_owner && !showEditForm && (
                    <DropDownMenu
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )} */}
            </Media>
        </>
    );
};

export default CommentContent;