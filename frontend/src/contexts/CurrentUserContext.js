import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

/** Folder separate contains context states to lessen verbose code in the same files. */

/** Create Two Context objects Providers allow both valus to be updated in App function.
 * Avaliable in all childs components in App.
 */

/** Create context to use in SignInForm.js page. */
export const CurrentUserContext = createContext()

/** Create context to use in NavBar.js component. */
export const SetCurrentUserContext = createContext()

/** Access Hooks for NavBar and SignInForm in above created contexts. */
export const useCurrentUserContext = () => useContext(CurrentUserContext)
export const useSetCurrentUserContext = () => useContext(SetCurrentUserContext)

export const CurrentUserProvider = ({ children }) => {
    /** Values set into CurrentUserContentext and SetCurrentUserContext */
    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
        try {
            const { data } = await axios.get("dj-rest-auth/user/");
            setCurrentUser(data)

        } catch (err) {
            console.log(err);
        }
    };

    /** React Hook imported to synchronize components with an external source */
    useEffect(() => {
        handleMount()
    }, []);

    return (
        /** Return context obkect providers. */
        /** Wrap children (div) in CurrentUseContext. Pass in data children will access in prob 'value='. */
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {/* Referance children Prob in CurrentUserProvider. */}
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )

};