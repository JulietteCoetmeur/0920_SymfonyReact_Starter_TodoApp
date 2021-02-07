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
      <Route exact path="/todo/add" component={TodoForm} />
      <Route exact path="/todo/edit/:id" component={TodoForm} />
      <Route exact path="/todo/see/:id" component={Todo} />
    </Switch>
    <Footer />
  </Router>
)}

export default App;

// Here we are routing our React App
// A path for a component 
// Go to components/Home.jsx >>>