import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { followHelper, unfollowHelper } from "../utils/utils";
import { useCurrentUser } from "./CurrentUserContext";
import { createContext, useContext, useEffect, useState } from "react";

/** Profile content created during Coursework content with Code Institute. */

// Create two context objects to get and set data.
export const ProfileContext = createContext();
export const SetProfileContext = createContext();

// Create two hooks for each context object.

export const useProfileData = () => useContext(ProfileContext);
export const useSetProfileData = () => useContext(SetProfileContext);

export const ProfileDataProvider = ({ children }) => {


    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularFollowers: { results: [] },
    });

    const currentUser = useCurrentUser();

    const handleUnFollow = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/followers/${clickedProfile.following_id}`);
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile)
                    ),
                },
                popularFollowers: {
                    ...prevState.popularFollowers,
                    results: prevState.popularFollowers.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post('/followers/', {
                followed: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        // Auto import mapping over array function for following, call it on each value.
                        followHelper(profile, clickedProfile, data.id)),
                },
                popularFollowers: {
                    ...prevState.popularFollowers,
                    results: prevState.popularFollowers.results.map((profile) =>
                        // Auto import mapping over array function for following in popular.
                        followHelper(profile, clickedProfile, data.id)),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    }

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
            <SetProfileContext.Provider value={{ setProfileData, handleUnFollow, handleFollow }}>
                {children}
            </SetProfileContext.Provider>
        </ProfileContext.Provider>
    );
};
