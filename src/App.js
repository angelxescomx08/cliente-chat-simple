import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/nav';
import Login from './components/login/login';
import Chat from './components/chat/chat';

import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;