import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Map from "./Pages/Map";
import OnePage from "./OnePage";
import Menu from "./components/Menu";
import Jelentkezes from "./Pages/Jelentkezes";

function App() {
  return (
    <Router>
      <div className="page fittop">
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            <Route exact path="/regisztracio">
              <Jelentkezes />
            </Route>
            <Route exact path="/terkep">
              <Map />
            </Route>
            <Route path="/">
              <OnePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
