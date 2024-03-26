import React from 'react'
import Header from './Header';
import Footer from './Footer';
import NavbarJP from './Navbar';
import Whatsapp from './Whatsapp';


export default function Layout(props) {
    const { children } = props;
    return (
        <div id='body'>
            <NavbarJP sticky="top" ></NavbarJP>
            {/* <Header></Header> */}
            {children}
            {children}
            <Footer></Footer>
            <Whatsapp></Whatsapp>
        </div>
    )
}
