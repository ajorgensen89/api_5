import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { createContext, useContext, useEffect, useState } from "react";

// Create two context objects to get and set data.
export const ProfileContext = createContext();
export const SetProfileContext = createContext();

// Create two hooks for each context object.

export const useProfileData = () => useContext(ProfileContext);
export const useSetProfileData = () => useContext(SetProfileContext);

export const ProfileDataProvider = ({ children }) => {

    // const { popularProfiles } = useProfileData();
    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularFollowers: { results: [] },
    });
    // Remove destructor
    // const { popularFollowers } = profileData;
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
        <ProfileContext.Provider value={profileData}>
            <SetProfileContext.Provider value={setProfileData}>
                {children}
            </SetProfileContext.Provider>
        </ProfileContext.Provider>
    );
};
