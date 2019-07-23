import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Contact, About } from './pages';

class Routers extends Component{
    render(){
        return (
            <Router>
                <div>
                    <h2>Tonylu Pro</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/about" component={ About } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routers;