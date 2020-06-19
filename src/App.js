import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Home />
			<Route  path='/' exact>
				<Home />
			</Route>
			<Route  path='/about' exact>
				<About />
			</Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
