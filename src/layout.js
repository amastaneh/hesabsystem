import React from 'react';
import packageJson from '../package.json';
import { Link, useLocation } from 'react-router-dom';


const Layout = ({ children }) => {
    const location = useLocation();
    const currentPath = location.pathname + location.hash;
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "#about" },
        { name: "Contact", path: "#contact" },
    ];
    const footerMenuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "#about" },
        { name: "Contact", path: "#contact" },
    ];
    const footerSocialLinks = [
        { name: "Instagram", url: "https://instagram.com/hesaabsystem", icon: "fab fa-instagram" },
        { name: "Twitter", url: "https://twitter.com/hesaabsystem", icon: "fab fa-twitter" },
        { name: "LinkedIn", url: "https://linkedin.com/hesaabsystem", icon: "fab fa-linkedin" },
        { name: "Facebook", url: "https://facebook.com/hesaabsystem", icon: "fab fa-facebook" },
    ];


    return <>
        {/* Header */}
        <header className="container-fluid font-roboto border-bottom border-light border-1 m-0 p-0">
            <div className="container">
                <nav className="navbar navbar-expand-xl navbar-light p-0 fs-6 fw-normal pb-4 pb-xl-0">
                    {/* Header/Logo */}
                    <a className="navbar-brand p-0 d-flex align-items-center text-dark text-decoration-none" href="/">
                        <img
                            src="/images/hesab-system-logo-512.png"
                            alt="Hesab System Logo"
                            className="mr-2"
                            width="128"
                            height="96"
                            style={{ objectFit: 'cover' }}
                        />
                        <h1 className="text-dark fs-1 fw-semibold">Hesab System</h1>
                    </a>
                    {/* Header/Mobile Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={(e) => {
                            const navbarNav = document.getElementById("navbarNav");
                            navbarNav.classList.toggle("show");
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Header/Navbar links */}
                    <div className="collapse navbar-collapse justify-content-end ps-3" id="navbarNav">
                        <ul className="navbar-nav">
                            {menuItems.map((item, index) => (
                                <li key={index} className="nav-item me-3">
                                    <Link
                                        className={`nav-link ${currentPath.includes(item.path) ? "text-dark" : "text-secondary"} hover:text-dark`}
                                        to={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button className="btn btn-dark mt-3 mt-xl-0">Join Us</button>
                    </div>
                </nav>
            </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="container-fluid border-top border-light border-1 bg-dark text-light p-5 mt-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-xl-4">
                        <div className="text-light fs-2 fw-semibold">Hesab System</div>
                        <p className="fs-6 fw-light pe-5 text-secondary mt-1">
                            Hesab System is a cutting-edge, AI-powered Accounting and Inventory Management solution designed to transform business operations with its advanced voice interaction capabilities. It provides seamless integration of intelligent automation to manage financial data, track inventory, and generate insightful reports, all through a user-friendly interface that supports natural language voice commands.
                        </p>
                    </div>
                    <div className="col-12 col-xl-4">
                        <h2 className="fs-5 fw-semibold my-2">Important Links</h2>
                        <ul className="list-unstyled mt-3">
                            {footerMenuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className="text-secondary hover:text-light text-decoration-none mb-2 d-block"
                                        to={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-xl-4">
                        <h2 className="fs-5 fw-semibold my-2">Follow Us</h2>
                        <ul className="list-unstyled mt-3">
                            {footerSocialLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="text-secondary hover:text-light text-decoration-none mb-2 d-block"
                                        href={item.url}
                                        aria-label={item.name}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className={`${item.icon} me-2`}></i>{item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5 fs-7 fw-light text-secondary">
                <small>&copy; 2021-2024 Hesab System. All rights reserved. Made with ❤️. v{packageJson.version}</small>
            </div>
        </footer>
    </>
};

export default Layout;
