import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./context";

//  Components
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Toggle from "./components/toggle/Toggle";

//  Pages
import Blog from "./pages/blog/Blog";
import Settings from "./pages/settings/Settings";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";

const App = () => {
  //  Test User Data
  const user = true

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Header />
        <Toggle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/post/:postId">
            <SinglePost />
          </Route>

          <Route exact path="/write">
           {user ?  <Write /> : <Home/>}
          </Route>

          <Route exact path="/settings">
          {user ?  <Settings/> : <Home/>}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
