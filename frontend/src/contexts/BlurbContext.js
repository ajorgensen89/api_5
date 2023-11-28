// import { createContext, useContext, useEffect } from "react";
// import { axiosReq } from "../api/axiosDefaults";
// import { useState } from "react";
// export const BlurbDataContext = createContext();
// export const SetBlurbDataContext = createContext();

// export const useBlurbData = () => useContext(BlurbDataContext);
// export const useSetBlurbData = () => useContext(SetBlurbDataContext);

// export const BlurbDataProvider = ({ children }) => {
//     /**Search Bar state. add search to axiosReq and set*/
//     const [query, setQuery] = useState("");
//     /** Sets props. Set default empty string */
//     const { message, filter = "" } = props;
//     /** Store objects in results array.*/
//     const [blurb, setBlurb] = useState({ results: [] });
//     /** Check if all data fetched. */
//     const [hasLoaded, setHasloaded] = useState(false);
//     /** To refetch blurbs when owners move between home, newsfeed and votes pages. 
//      * From React router Hook to return objects with data about URL. 
// Credit to Code Institute Coursework project Moments. */
//     const { pathname } = useLocation();

//     useEffect(() => {
//         const fetchBlurbs = async () => {
//             try {
//                 /**Filter prop is used to filter what the user will see. 
// Followed/voted for blurbs. */
//                 const { data } = await axiosReq(`/blurbs/?${filter}search=${query}`);
//                 setBlurb(data);
//                 setHasloaded(true);
//                 console.log("data set:", data)
//             } catch (err) {
//                 console.log(err, "fetchBlurbs err");

//             }
//         };
//         /**reset loading sppin to show to user each time. */
//         setHasloaded(false);
//         /**Run useEffect each time the filter, search query or path changes. */
//         fetchBlurbs();
//     }, [filter, pathname, query]);



//     return (
//         <BlurbDataContext.Provider value={blurb}>
//             <SetBlurbDataContext.Provider value={setBlurb}>
//                 {children}
//             </SetBlurbDataContext.Provider>
//         </BlurbDataContext.Provider>
//     )
// }