import { NavBar } from "../src/components/nav/NavBar";
import { Home } from "./pages/home/home";
import Single from "./pages/home/single/single";
import Write from "./pages/home/write/write";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Write />
    </div>
  );
}

export default App;
