import React, { Component } from 'react';
import './App.css';
import {Navbar,NavItem,Nav,NavDropdown,MenuItem} from "react-bootstrap"
import ReactDOM from "react-dom"

class App extends Component {
  render() {
    return (
<div className="App">
 <Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
        <img className="logo" src="./img/logo.gif"></img>
      </Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
        <input placeholder="search" className="form-control visible-xs input"/>
				<NavDropdown eventKey={3} title="Shots" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="Designers" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="Blog" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="Podpost" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="Meetups" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="Jobs" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="Hiring" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
        <NavDropdown eventKey={3} title="..." id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>

			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
					Sign in
				</NavItem>
				<NavItem eventKey={2} href="#">
					Sign up
				</NavItem>
        <input type="text" placeholder="search" className="input hidden-xs "></input>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
