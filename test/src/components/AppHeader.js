import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function AppHeader() {
    return (
        <header className="app-header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">NUMERICAL METHODS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Root of Equation" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/RoE/Bisection">Bisection Method</NavDropdown.Item>
                            <NavDropdown.Item href="/RoE/False-Position">False-Position Method</NavDropdown.Item>
                            <NavDropdown.Item href="/RoE/One-Point">One-Point Iteration Method</NavDropdown.Item>
                            <NavDropdown.Item href="/RoE/Newton-Raphson">Newton-Raphson Method</NavDropdown.Item>
                            <NavDropdown.Item href="/RoE/Secant">Secant Method</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                        <NavDropdown title="Linear Algebraic Equations" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/LAE/Cramer">Cramer's Rule</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/Gauss-Elimination">Gauss Elimination Method</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/Gauss-Jordan">Gauss-Jordan Method</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/LU">LU Decomposition Method</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/Cholesky">Cholesky Decomposition Method</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/Jacobi">Jacobi Iteration Method</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/Gauss-Seidel">Gauss-Seidel Iteration Method</NavDropdown.Item>
                            <NavDropdown.Item href="/LAE/Conjugate">Conjugate Gradient Method</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Interpolation and Extrapolation" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/InE/Newton">Newton's Divided-Differences</NavDropdown.Item>
                            <NavDropdown.Item href="/InE/Lagrange">Lagrange Polynomials</NavDropdown.Item>
                            <NavDropdown.Item href="/InE/Spline">Spline Interpolation</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default AppHeader;