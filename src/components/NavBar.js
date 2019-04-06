import React from 'react'
import { Navbar } from 'react-bootstrap';
import icon from '../static/img/icon.svg'



class NavBar extends React.Component {

  render() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={ icon }
                width="40"
                height="40"
                className="d-inline-block align-top"
            />
            {' APP de Postagens'}
            </Navbar.Brand>
        </Navbar>
    );
  }
}

export default NavBar