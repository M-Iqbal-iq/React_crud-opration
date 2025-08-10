import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className="container-fluid">
            <div className="head px-2 ">
                <nav
                    className="nav justify-content-left  "
                >
                    <Link className="nav-link " to="#" aria-current="page"
                    >Active link </Link>
                    <Link className="nav-link" to="#">Link</Link>
                    <Link className="nav-link" to="#">Disabled link</Link>
                </nav>

            </div>
            <hr />

            <Outlet />

        </div>
    );
};

export default Content;
