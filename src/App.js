import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import PokemonProfile from "./components/PokemonProfile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/Pokemon" exact component={PokemonProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
