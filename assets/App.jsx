import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/uui/Footer';
import Home from './components/Home';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';


const App = () => {
return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos/add" component={TodoForm} />
      <Route exact path="/todos/edit/:id" component={TodoForm} />
      <Route exact path="/todo/show/:id" component={Todo} />
    </Switch>
    <Footer />
  </Router>
)}

export default App;