import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";
import { removeTimestampToken, setRefreshToken } from "../utils/utils";
// import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

// Create context for current user details.
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Use context to create current user variables storing object details.
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// 
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();

    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get("dj-rest-auth/user/");
            setCurrentUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);


    // From React Libary. Use to handle Tokens. Runs before children have mounted.
    useMemo(() => {
        axiosReq.interceptors.request.use(
            async (config) => {
                // Only run 'if' statement if token needs to be refreshed.
                if (setRefreshToken()) {
                    try {
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (err) {
                        // Set logged in user.
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                history.push("/signin");
                            }
                            return null;
                        });
                        // Remove timestamp token.
                        removeTimestampToken();
                        return config;
                    }
                }
                console.log("axiosReq")
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        axiosRes.interceptors.response.use(
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (err) {
                        // Set logged in user.
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                history.push("/signin");
                            }
                            return null;
                        });
                        // Remove timestamp token
                        removeTimestampToken();
                    }

                    return axios(err.config);
                }
                console.log("axiosRes")
                return Promise.reject(err);

            }
        );
    }, [history]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};