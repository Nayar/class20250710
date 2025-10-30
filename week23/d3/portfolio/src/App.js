import Home from "./Home";
import About from "./About";
import MyProjects from "./MyProjects";
import MyBestFriend from "./MyBestFriend";
import { Routes } from "react-router-dom";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
            <a href="/">Home HREF</a>
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <a href="/about">About HREF</a>
        </li>
        <li>
            <a href="/projects">Projects</a>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<MyProjects/>}/>
        <Route path="/bff/:name" element={<MyBestFriend hobby="swimming"/>}/>
      </Routes>
    </>
  )
}

export default App