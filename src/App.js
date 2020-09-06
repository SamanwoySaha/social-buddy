import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path="/post/:postId">
              <PostDetail />
          </Route> */}
          <Route path="/posts">
            <Posts />
          </Route>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
