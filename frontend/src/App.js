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


/** Switch holds route. Exact path is rendered when matching. */
/**Link to NavBar.js */

function App() {
  return (
    <div className={styles.App}>
      <div>
        <NavBar />
        <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route render={() => <h1>Page not found!</h1>} />
        </Switch>
        </Container>
      </div>

    </div>
  );
}

export default App;