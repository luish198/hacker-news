//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import News from "./News"
import NewsLuis from "./NewsLuis"
import NewsAdd from "./NewsAdd"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const [search, setSearch] = useState("");


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News Clone by Enis + Luis</h1>

        <Switch>
          <Route exact path="/">{" "}
            <input type="text" placeholder="search for" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Link to="/news">check for News here...</Link>{" "}
            <Link to="/newsluis">check your special News here...</Link>{" "}
            <Link to="/newsAdd">Add your News here...</Link>{" "}
            
          </Route>

          <Route exact path="/news">{" "}
            <Link to="/">Home...</Link>{" "}
            <News search={search} />
          </Route>

        
          <Route exact path="/newsluis">{" "}
            <Link to="/">Home...</Link>{" "}
            <NewsLuis search={search} />
          </Route>

          <Route exact path="/newsAdd">{" "}
            <Link to="/">Home...</Link>{" "}
            <NewsAdd search={search} />
          </Route>

        </Switch>




      </header>
    </div>
  );
}

export default App;

/*{newsStories.map((story) => (
        <li>{story.title}</li>
      ))}*/
