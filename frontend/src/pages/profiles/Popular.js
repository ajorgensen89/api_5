import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/App.module.css";
import Display from "../../components/Display";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import UserProfile from "./UserProfile";
// import { useProfileData } from "../../contexts/ProfileDataContext";
// import UserProfile from "./UserProfile";

const Popular = () => {
    // const { popularProfiles } = useProfileData();
    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularFollowers: { results: [] },
    });
    const { popularFollowers } = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    // Axios request for most followed profiles.
                    // Most popular at the top.
                    "/profiles/?ordering=-followers_count"
                );
                // Set new profile state.
                setProfileData((prevState) => ({
                    ...prevState,
                    popularFollowers: data,
                }));
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
        // Get profiles depending on state of current user. Use useState to access
        // current user information.
    }, [currentUser]);

    return (
        // ${mobile && 'd-lg-none text-center mb-3'}`
        <Container className={styles.ContainerContent}>
            <p>Popular</p>
            {/* Access profile information and display id and name. */}
{/* Check if there are any popular users. Look through them and display the name. */}
            {popularFollowers.results.length ? (
                <>
                    {popularFollowers.results.map((profile) => (
                        // Access profile prop with a key to make sure the current user
                        // accesses the correct user profile.
                        <UserProfile key={profile.id} profile={profile} />
                    ))}
                </>
            ) : (
                // As API makes request, you can see the loading spinner.
                <Display spinner />
            )}
        </Container >
    );
};

export default Popular;