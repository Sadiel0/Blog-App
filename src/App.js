import { NavBar } from "../src/components/nav/NavBar";
import Home from "../src/pages/home/home";
import Settings from "../src/pages/settings/settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const user = false;

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Register />}
          />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/write"
            element={user ? <Write /> : <Register />}
          />
          <Route
            exact
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
