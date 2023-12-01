import React from "react";
import styles from "../../styles/App.module.css";
import { Container, Media, NavLink } from "react-bootstrap";
import Avatar from "../../components/Avatar";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Review = (props) => {
        
    const {
        profile_id,
        content,
        updated_at,
        profile_image,
        profileImage
        // rating,
    } = props;

    return (
        <>
            <hr />
            <Media>
                <NavLink to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} text="Profile" height={35} />
                    <div>{owner}</div>
                </NavLink>
                <Media.Body>
                    <span className={styles.OwnerName}>{owner}</span>
                    <span className={styles.UpdatedDate}>{updated_at}</span>
                    
                    <Container>Review:{content}</Container>
                </Media.Body>
                
            </Media>
        </>
    );
};

export default Review;