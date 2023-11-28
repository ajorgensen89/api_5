import axios from "axios"
import { useEffect } from "react";
import { useHistory } from "react-router"

// Set useRedirect React Hook to direct users away from pages they can have access to when either
// logged in or logged out.
export const useRedirect = (userStatus) => {
    const history = useHistory();
    useEffect(() => {
        const handleMount = async () => {
            try {
                // Use axios to post a request to token to check if user is logged in or not
                await axios.post('/dj-rest-auth/token/refresh/')
                // If user is logged in, this code will run.
                if (userStatus === 'loggedIn') {
                    history.push('/');
                }

                // If error, user is not logged in so user is redirected by euqaling 'loggedout'.
            } catch (err) {
                if (userStatus === 'loggedOut') {
                    history.push('/signup');
                }

            }
        };
        // Handle effort and run on each dependancy stated in the [].
        handleMount();
    }, [history, userStatus]);

};