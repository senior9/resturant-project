import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo2 from "../../../images/logo2.png";
import addCart from "../../../images/Path 1.png";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Header.css";
import Banner from '../../Home/Banner/Banner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]=useAuthState(auth);
    const [name, setname]= useState("");
    console.log(user);
    const handleSignOut=() => {
        signOut(auth);
    }

    return (
        <div className=''>
            <Navbar collapseOnSelect className='sticky-top' expand="lg" bg="white"  variant="white">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand as={Link} to="/" >
                                <img className='mx-0 d-block' style={{ height: '30px', marginRight: '20px' }} src={logo2} alt="" />
                            </Navbar.Brand>
                        </Nav>
                        <Nav >
                            <Navbar.Brand href="#home">
                                <img className='mx-0 d-block m-3' style={{ height: '20px', marginRight: '20px' }} src={addCart} alt="" />
                            </Navbar.Brand>
                            {user?
                                <Button onClick={handleSignOut} as={Link} to="signup" className='border-0 m-2' variant="outline-danger">Sign out</Button>
                                    
                                :<Button as={Link} to='login' className='border-0 m-2' variant="outline-success">Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Header;