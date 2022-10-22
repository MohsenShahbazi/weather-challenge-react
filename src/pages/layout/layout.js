import {Outlet, Link} from "react-router-dom";
import React, {Component} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

class Layout extends Component {
    render() {
        return (
            <>
               <Header></Header>
                <Outlet/>
               <Footer></Footer>
            </>
        )
    }
}

export default Layout;

