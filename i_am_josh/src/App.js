import "./App.css";
import Navbar from "./components/Global/Navbar/Navbar";
import Footer from "./components/Global/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
