// import jwtDecode from "jwt-decode"
import { axiosReq } from "../api/axiosDefaults"
import jwtDecode from "jwt-decode"

/** Credit from Code Institute content, created during the supplied coursework. */
/**Use in conjunction with infinite scroll to access the 'next' url in API for further posts. */

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

/** Credit from Code Institute content, created during the supplied coursework. */

// Pass profile we are mapping over, clicked profile and following count id.
export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
        ? // This is the profile I clicked on,
        // update its followers count and set its following id
        {
            ...profile,
            followers_count: profile.followers_count + 1,
            following_id,
        }
        : profile.is_owner
            ? // Logged in user profile.
            // Update the following count by 1
            { ...profile, following_count: profile.following_count + 1 }
            :
            // Not use or profile wanted, return profile unchanged.
            profile;
};

// Pass profile we are mapping over and the profile that was clicked on.
export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
        ? // unfollow the profile clicked on and reduce
        // counts by 1.
        {
            ...profile,
            followers_count: profile.followers_count - 1,
            following_id: null,
        }
        // Logged in users profile count is by 1.
        : profile.is_owner
            ? { ...profile, following_count: profile.following_count - 1 }
            // Not any in question, return unchanged.
            : profile;
}

// Token refresh for login using setItem.
export const setTimestampToken = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("setTokenTimestamp", refreshTokenTimestamp);
};

// Will or will not refresh token using '!!' on users local storage using getItem ,
// depending on if the expiry date exists.
export const setRefreshToken = () => {
    return !!localStorage.getItem("setTokenTimestamp");
};

// Removes token using removeItem from users local storage.
export const removeTimestampToken = () => {
    localStorage.removeItem("setTokenTimestamp");
};