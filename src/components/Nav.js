import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Navigation() {

    return (
        <div className="navbar">

            <Navbar fixed="top" variant="dark" className="links">
                    <div className="logo"><h1>Texas Wide Holdings LLC</h1></div>
                    <Nav>
                        <Nav.Link href="/"><h2>Home</h2></Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}



export default Navigation
