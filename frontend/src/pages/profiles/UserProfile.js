import React from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import Button from "react-bootstrap/Button";
import appStyles from "../../styles/Profiles.module.css"
import { useSetProfileData } from "../../contexts/ProfileContext";

// Pasing props. Image size will set Avatar size. 
// Renders profile and image by component.
const UserProfile = ({ profile, imageSize = 35 }) => {
    // Get fields for profile prop to use.
    const { id, following_id, image, owner } = profile;

    // Check if user owns the profile.
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const { handleUnFollow, handleFollow } = useSetProfileData();

    return (
        // Align profile avatar picture and the owner name. Make gap between each user.
        <div className="d-flex align-items-center my-2">
            <div>
                <Link to={`/profiles/${id}`}>
                    {/* Prop to be passed set in Avatar component.
                    imageSize set as different sized prop in UserProfile prop. */}
                    <Avatar src={image} height={imageSize} />
                </Link>
            </div>
            <div classname="mx-2">
                {owner}
            </div>
            <div className="text-right ml-auto text-wrap">
                {/* Check if current user is logged in 
                and not the owner of the profile being followed. */}
                {currentUser && !is_owner && (
                    // If the following_id does exist - unfollow, otherwise, follow avaliable.
                    following_id ? (
                        // Bootstrap Button.
                        <Button
                            className={`${appStyles.OtherButton} mx-2`}
                            onClick={() => handleUnFollow(profile)}
                        >Unfollow</Button>
                    ) : (
                        <Button
                            className={`${appStyles.FollowStatusButton} mx-2`}
                            // Pass profile as argument as user just clicked.
                            onClick={() => handleFollow(profile)}
                        >Follow</Button>
                    )
                )}

            </div>
        </div>
    )
}

export default UserProfile;