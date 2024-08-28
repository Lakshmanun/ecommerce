import React from 'react'
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { Container, FormControl, Navbar, Dropdown, Nav, Badge, } from "react-bootstrap"
export default function Header() {
    return (
        <div>
            <Navbar bg='dark' variant='dark' style={{ height: 80 }} >
                <Container>
                    <Navbar.Brand>
                        <Link to="./" >shooping cart</Link>
                    </Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl style={{ width: 500 }}
                            placeholder='search aproduct'
                            className="m-auto" />
                    </Navbar.Text>
                    <Nav>
                        <Dropdown aligRight>
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart color='white' fontSize={25} />
                                <Badge>
                                    {10}
                                </Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                <span style={{ padding: 10 }}>cart is empty</span>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

// create-router-dom// used for routering
// install react-bootstrap//
// react-icons//*