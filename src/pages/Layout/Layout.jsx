import React from 'react';
import NavBar from "../../components/NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";
import './Layout.sass'

const Layout = () => {
    return (
        <div className="layout">
            <NavBar/>
            <section className={'main-content'}>
                <Outlet/>
            </section>
        </div>
    );
};

export default Layout;