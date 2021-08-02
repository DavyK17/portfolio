import Nav from "./Nav";
import Intro from "./body/Intro";
import Projects from "./body/Projects";
import Contact from "./body/Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
