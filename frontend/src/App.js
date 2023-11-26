// import logo from './logo.svg';
// import './App.css';
import styles from "./styles/App.module.css";
// import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
/** To Switch between each page via a Route using 'React Routing' */
import { Route, Switch } from "react-router-dom";
/** Using Container from 'React Bootstrap */
import Container from "react-bootstrap/Container";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import CreateBlurbForm from "./pages/Blurbs/CreateBlurbForm";
import ShowBlurbPage from "./pages/Blurbs/ShowBlurbPage";
// import PostCreateForm from "./pages/Blurbs/PostCreateForm";
import AllBlurbs from "./pages/Blurbs/AllBlurbs";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import EditBlurbForm from "./pages/Blurbs/EditBlurbForm";
import ProfileHome from "./pages/profiles/ProfileHome"

/** Switch holds route. Exact path is rendered when matching. */
/** Link to NavBar.js */
function App() {
  /**Set current user by using useCurrentuser Hook */
  const currentUser = useCurrentUser();
  /**Get profile_id if current username matches owner for currentUser. Empty string as default.*/
  const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <div>
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <AllBlurbs message="No results... Try another search?" />} />
            <Route exact path="/newsfeed" render={() => (
              <AllBlurbs
                message="No results... Try another search? Or follower a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />)} />
            <Route exact path="/upVoted" render={() => (
              <AllBlurbs
                message="No results... Try another search? Or vote for the best blurbs."
                filter={`votes__owner__profile=${profile_id}&ordering=-votes__created_at&`}
              />)} />
            <Route exact path="/login" render={() => <LogInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/blurbs/create" render={() => <CreateBlurbForm />} />
            <Route exact path="/blurbs/:id" render={() => <ShowBlurbPage />} />
            <Route exact path="/blurbs/:id/edit" render={() => <EditBlurbForm />} />
            <Route exact path="/profiles/:id" render={() => <ProfileHome />} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </Container>
      </div>
    </div>

  );
}

export default App;