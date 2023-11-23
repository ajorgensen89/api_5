// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { axiosRes, axiosReq } from "../api/axiosDefaults";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// /** Folder separate contains context states to lessen verbose code in the same files. */

// /** Create Two Context objects Providers allow both valus to be updated in App function.
//  * Avaliable in all childs components in App.
//  */

// /** Create context hook to use in LogInForm.js page. */
// export const CurrentUserContext = createContext()

// /** Create context hook to use in NavBar.js component. */
// export const SetCurrentUserContext = createContext()

// /** Access Hooks for NavBar and LogInForm in above created contexts.
//  * Stores useState() and Mounts for API.
// */

// export const useCurrentUserContext = () => useContext(CurrentUserContext)
// export const useSetCurrentUserContext = () => useContext(SetCurrentUserContext)

// export const CurrentUserProvider = ({ children }) => {
//     /** Values set into CurrentUserContentext and SetCurrentUserContext */
//     const [currentUser, setCurrentUser] = useState(null);

//     /** Used React Hook useHistory() to redirect */
//     const history = useHistory()

//     const handleMount = async () => {
//         try {
//             /** Get and store data in setCurrentUser variable. */
//             /** axios updated to response interceptor */
//             const { data } = await axiosRes.get("dj-rest-auth/user/");
//             setCurrentUser(data)
//             console.log("accessed dj-rest-auth/user")

//         } catch (err) {
//             console.log(err, "errDRFuser");
//         }
//     };

//     /** React Hook imported to synchronize components with an external source */
//     useEffect(() => {
//         handleMount()
//     }, []);

//     /** Cache from React useMemo() Place before children Mount in return below.*/
//     /** Credit from Code Institute Coursework run thought Moments. */
//     useMemo(() => {
//         /** Request interceptor attached to axiosReq created in axiosDefaults for requests. */
//         axiosReq.interceptors.request.use(
//             async (config) => {
//                 // if (shouldRefreshToken()) {
//                 /** Refresh token in try/catch error block. */
//                 try {
//                     await axios.post("/dj-rest-auth/token/refresh/");
//                 } catch (err) {
//                     setCurrentUser((prevCurrentUser) => {
//                         /** If rejected, user is no longer logged in as token expired (defualt 24hours) .
//                         * Redirect to Sign In page. 
//                         */
//                         if (prevCurrentUser) {
//                             history.push("/login");
//                             console.log("accessed dj-rest-auth/token/refresh")
//                         }
//                         /** CurrentUser set to null */
//                         console.log("returnNULLrefresh")
//                         return null;
//                     });
//                     // removeTokenTimestamp();
//                     /** Incase errors. */
//                     console.log("errPromiseRejecttoken1")
//                     return config;
//                 }
//                 // }
//                 console.log("errPromiseRejecttoken2")
//                 return config;
//             },
//             (err) => {
//                 console.log("errPromiseRejecttoken3Main")
//                 return Promise.reject(err);

//             }
//         );

//         /** Response interceptor attached to axiosRes created in axiosDefaults for response. */
//         axiosRes.interceptors.response.use(
//             /** No error, return response. */
//             (response) => response,
//             /** Check error */
//             async (err) => {
//                 if (err.response?.status === 401) {
//                     try {
//                         /** Refresh token in try/catch error block. */
//                         await axios.post("/dj-rest-auth/token/refresh/");
//                     } catch (err) {
//                         /** Checking if user signed in */
//                         console.log("axiosRes for setCurrentUser")
//                         setCurrentUser((prevCurrentUser) => {
//                             if (prevCurrentUser) {
//                                 /** Redirect user to signing page using history variable using useHistory() React Hook.*/
//                                 history.push("/login");
//                             }
//                             console.log("axiosRes for setCurrentUserreturnNULL")
//                             return null;
//                         });
//                     }
//                     // removeTokenTimestamp();
//                     /** Exit interceptor */
//                     console.log("axiosRes for setCurrentUserreturnNULL2")
//                     return axios(err.config);
//                 }
//                 /** Promise used to reject interceptor if not error 401. */
//                 console.log("axiosRes for setCurrentUserPROMISE")
//                 return Promise.reject(err);
//             }
//         );
//         /** Add dependancy array for useMemo() Hook. */
//     }, [history]);

//     return (
//         /** Return context object providers. */
//         /** Wrap children (div) in CurrentUserContext and set. Pass in children data and pass Provider 'value='. */
//         <CurrentUserContext.Provider value={currentUser}>
//             <SetCurrentUserContext.Provider value={setCurrentUser}>
//                 {/* Referance children Prob in CurrentUserProvider. */}
//                 {children}
//             </SetCurrentUserContext.Provider>
//         </CurrentUserContext.Provider>
//     )

// };
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";
// import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

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
                // if (shouldRefreshToken()) {
                try {
                    await axios.post("/dj-rest-auth/token/refresh/");
                } catch (err) {
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push("/signin");
                        }
                        return null;
                    });
                    // removeTokenTimestamp();
                    return config;
                }
                // }
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
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                history.push("/signin");
                            }
                            return null;
                        });
                    }
                    // removeTokenTimestamp();
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