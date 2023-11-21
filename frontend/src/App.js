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
import SignInForm from "./pages/auth/SignInForm";

/** Two Context objects Providers allow both valus to be updated in App function.
 * Avaliable in all childs components in App.
 */
// export const CurrentUserContext = createContext()
// export const SetCurrentUserContext = createContext()


/** Switch holds route. Exact path is rendered when matching. */
/** Link to NavBar.js */

function App() {

  // /** Values set into CurrentUserContentext and SetCurrentUserContext */
  // const [currentUser, setCurrentUser] = useState(null);

  // const handleMount = async () => {
  //   try {
  //     const { data } = await axios.get("dj-rest-auth/user/");
  //     setCurrentUser(data)

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // /** React Hook imported to synchronize components with an external source */
  // useEffect(() => {
  //   handleMount()
  // }, []);

  return (
    <div className={styles.App}>
      <div>
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <h1>Home page</h1>} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </Container>
      </div>
    </div>

  );
}

export default App;