//import logo from './logo.svg';
//import "./App.css";
import "./App2.css";
import { useEffect, useState } from "react";
import News from "./News";
import NewsLuis from "./OurNews";
import NewsAdd from "./NewsAdd";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="App-header">
      </header>
      <div className="App">
      </div>
      <Switch>
        <div className="newsBox">
          <h1 className="Head">Hacker News Clone by Enis + Luis</h1>
          <Route exact path="/">
            {" "}
            <input
              type="text"
              placeholder="search for"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <container className="menuContainer">

              <button>
                <Link to="/news">check for News here...</Link>{" "}
              </button>
              <button>
                <Link to="/OurNews">check your special News here...</Link>
              </button>
              <button>
                <Link to="/newsAdd">Add your News here...</Link>{" "}
              </button>

            </container>

            <br />
          </Route>

          <Route exact path="/news">
            {" "}
            <Link to="/">
              <button>Home...</button>
            </Link>{" "}
            <News search={search} />
          </Route>

          <Route exact path="/OurNews">
            {" "}
            <Link to="/">
              <button>Home...</button>
            </Link>{" "}
            <NewsLuis search={search} />
          </Route>

          <Route exact path="/newsAdd">
            {" "}
            <Link to="/">
              <button>Home...</button>
            </Link>{" "}
            <NewsAdd search={search} />
          </Route>
        </div>
      </Switch>


      ;
    </>
  )


}

export default App;

/*{newsStories.map((story) => (
        <li>{story.title}</li>
      ))}*/

// Final Version
