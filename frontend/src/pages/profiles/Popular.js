import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/App.module.css";
import Display from "../../components/Display";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { axiosReq } from "../../api/axiosDefaults";
import UserProfile from "./UserProfile";
import { useProfileData } from "../../contexts/ProfileContext";
// import { useProfileData } from "../../contexts/ProfileDataContext";
// import UserProfile from "./UserProfile";

// mobile prob added for better viewing on  smaller devices.
const Popular = ({ mobile }) => {
    const { popularFollowers } = useProfileData();

    return (
        <Container className={`${styles.ContainerContent} ${mobile && 'd-lg-none text-center mb-3'}`}>

            {popularFollowers.results.length ? (

                <>
                    <p>Popular</p>
                    {/* Access profile information and display id and name. */}
                    {/* Check if there are any popular users. Look through them and display the name. */}
                    {mobile ? (
                        <div className={`${styles.ContainerContent} 'd-flex justify-content-around'`}>
                            {popularFollowers.results.slice(0, 3).map((profile) => (
                                // Access profile prop with a key to make sure the current user
                                // accesses the correct user profile.
                                <UserProfile key={profile.id} profile={profile} />
                            ))}
                        </div>
                    ) : (
                        popularFollowers.results.map((profile) => (
                            // Access profile prop with a key to make sure the current user
                            // accesses the correct user profile.
                            <UserProfile key={profile.id} profile={profile} />
                        ))
                    )}

                </>
            ) : (
                // As API makes request, you can see the loading spinner.
                <Display spinner />
            )}
        </Container >
    );
};

export default Popular;