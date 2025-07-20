import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import GraficaMysql from "./graficamysql";
import Pies from "./graficapastel";
import '../App.css'

function Ejemplonavbar() {
    return (
        <>
        <Navbar className="navbg" expand="lg" >
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="menu">
                        <Nav.Link as = {Link} to="/MySQL">Grafica MYSQL</Nav.Link>
                        <Nav.Link as = {Link} to="/Pies">Grafica Pies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    );
}
export default Ejemplonavbar;