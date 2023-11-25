// import jwtDecode from "jwt-decode"
import { axiosReq } from "../api/axiosDefaults"


/** Credit from Code Institute content, created during the supplied coursework. */
/** Can be used for separeate occasions. */
export const fetchedMoreData = async (resource, setResource) => {
    try {
        console.log("resource=blurb", resource)
        /** Axios request to next page of results. Gets the URL from the next: in the API. */
        const { data } = await axiosReq.get(resource.next)
        console.log("resourceNext", resource.next)
        setResource(prevResource => ({

            /** Returned object, spread. */
            ...prevResource,

            /** Update next page of result. */
            next: data.next,

            /** Add new post to prevResource array*/
            results: data.results.reduce((acc, cur) => {
                console.log("prevresource", prevResource)
                console.log("data", data)
                console.log("acc.curr", acc, cur)
                return acc.some(

                    /** Check old array results with new array and removed any repeats. */
                    accResults => accResults.id === cur.id) ? acc : [...acc, cur];
            }, prevResource.results),

        }));
    } catch (err) {

    }
};
