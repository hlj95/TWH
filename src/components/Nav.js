import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Navigation() {

    return (
        <div className="navbar">

            <Navbar className="links">
                    <div className="logo"><h2>TWH LLC</h2></div>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}



export default Navigation
