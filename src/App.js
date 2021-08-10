import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

function App() {
  document.body.className = "bg-new";
  
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Blog} path="/blog" />
        <Route component={Portfolio} path="/portfolio" />
      </Switch>
    </Router>
  );
}

export default App;
