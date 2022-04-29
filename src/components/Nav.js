import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Navigation() {

    return (
        <div className="navbar">

            <Navbar fixed="top" bg="black" variant="dark" className="links">
                    <div className="logo"><h1>&nbsp;Texas Wide Holdings LLC&nbsp;</h1></div>
                    <Nav >
                        <Nav.Link href="/" ><h4>Home</h4></Nav.Link>
                        <Nav.Link href="/"><h4>About Us</h4></Nav.Link>
                        <Nav.Link href="/"><h4>Projects</h4></Nav.Link>
                        <Nav.Link href="/" ><h4>Future</h4></Nav.Link>
                    </Nav>
                    
            </Navbar>
        </div>
    )
}



export default Navigation
