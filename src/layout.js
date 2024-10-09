import React from 'react';
import packageJson from '../package.json';
import { useLocation } from 'react-router-dom';
import NavbarToggler from './pages/comNavbarToggler';


const Layout = ({ children }) => {
    const location = useLocation();
    const isMobile = window.innerWidth < 1200;
    const currentPath = location.pathname + location.hash;
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "#services" },
        { name: "Contact", path: "#contact" },
    ];
    const footerMenuItems = [
        { target: "_self", name: "Home", path: "/" },
        { target: "_self", name: "Services", path: "#services" },
        { target: "_self", name: "Contact", path: "#contact" },
        { target: "_blank", name: "Join Us", path: "https://eepurl.com/i0YRnE" },
    ];
    const footerSocialLinks = [
        { name: "Instagram", url: "https://instagram.com/hesaabsystem", icon: "fab fa-instagram" },
        { name: "Twitter", url: "https://twitter.com/hesaabsystem", icon: "fab fa-twitter" },
        { name: "LinkedIn", url: "https://linkedin.com/hesaabsystem", icon: "fab fa-linkedin" },
        { name: "Facebook", url: "https://facebook.com/hesaabsystem", icon: "fab fa-facebook" },
    ];
    const footerContactLinks = [
        { name: "Email", url: "mailto:info@hesabsystem.com", label: "info@hesabsystem.com", icon: "far fa-envelope" },
        { name: "Canada Phone", url: "tel:+1.4164603070", label: "(416) 460-3070", img: "/images/flag-ca.svg" },
        { name: "US Phone", url: "tel:+1.3473380789", label: "(347) 338-0789", img: "/images/flag-us.svg" },
    ]


    return <>
        {/* Header */}
        <header
            id="home"
            className="container-fluid font-roboto border-bottom border-light border-1 m-0 p-0"
            style={{ zoom: isMobile ? 0.9 : 1 }}
        >
            <div className="container">
                <nav className="navbar navbar-expand-xl navbar-light p-0 fs-6 fw-normal pb-4 pb-xl-0">
                    {/* Header/Logo */}
                    <a
                        className="navbar-brand p-0 d-flex align-items-center text-dark text-decoration-none"
                        href="/"
                        title="Hesab System"
                        aria-label="Hesab System"
                    >
                        <img
                            src="/images/hesab-system-logo-512.png"
                            alt="Hesab System Logo"
                            className="mr-2"
                            width="128px"
                            height="96px"
                            style={{ objectFit: 'cover' }}
                        />
                        <h1 className="text-dark fs-1 pt-1 fw-semibold">Hesab System</h1>
                    </a>


                    {/* Header/Mobile Toggler */}
                    <NavbarToggler className="navbar-toggler me-4" />

                    {/* Header/Navbar links */}
                    <div className="collapse navbar-collapse justify-content-end ps-3" id="navbarNav">
                        <ul className="navbar-nav">
                            {menuItems.map((item, index) => (
                                <li key={index} className="nav-item me-3">
                                    <a
                                        className={`nav-link ${currentPath.includes(item.path) ? "text-dark" : "text-secondary"} hover:text-dark`}
                                        href={item.path}
                                        title={item.name}
                                        aria-label={item.name}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>


                        <a
                            className="btn btn-dark mt-3 mt-xl-0"
                            href="https://eepurl.com/i0YRnE"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Join Us"
                        >Join Us</a>
                    </div>
                </nav>
            </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer id="contact" className="container-fluid border-top border-light border-1 bg-dark text-light p-5 mt-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-xl-6">
                        <div className="text-light fs-2 fw-semibold">Hesab System</div>
                        <p className="fs-6 fw-light pe-5 text-secondary mt-1">
                            Hesab System is a cutting-edge, AI-powered Accounting and Inventory Management solution designed to transform business operations with its advanced voice interaction capabilities. It provides seamless integration of intelligent automation to manage financial data, track inventory, and generate insightful reports, all through a user-friendly interface that supports natural language voice commands.
                        </p>
                    </div>
                    <div className="col-4 col-xl-2">
                        <h2 className="fs-5 fw-semibold my-2">Important Links</h2>
                        <ul className="list-unstyled mt-3">
                            {footerMenuItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="text-secondary hover:text-light text-decoration-none mb-2 d-block"
                                        href={item.path}
                                        target={item.target}
                                        rel={item.target === "_blank" ? "noreferrer" : undefined}
                                        title={item.name}
                                        aria-label={item.name}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-4 col-xl-2">
                        <h2 className="fs-5 fw-semibold my-2">Follow Us</h2>
                        <ul className="list-unstyled mt-3">
                            {footerSocialLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="text-secondary hover:text-light text-decoration-none mb-2 d-block"
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        title={"Hesab System " + item.name}
                                        aria-label={"Hesab System " + item.name}
                                    >
                                        <i className={`${item.icon} me-2`}></i>{item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-4 col-xl-2">
                        <h2 className="fs-5 fw-semibold my-2">Contact Us</h2>
                        <ul className="list-unstyled mt-3">
                            {footerContactLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="text-secondary hover:text-light text-decoration-none mb-2 d-block no-wrap"
                                        href={item.url}
                                        title={"Hesab System " + item.name}
                                        aria-label={"Hesab System " + item.name}
                                    >
                                        {item.icon && <i className={item.icon}></i>}
                                        {item.img && <img
                                            src={item.img}
                                            alt={item.name}
                                            width="18"
                                            height="18"
                                        />}
                                        <span className="ms-2">
                                            {item.label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5 fs-7 fw-light text-secondary">
                <small>&copy; 2021-2024 Hesab System. All rights reserved. Made with ❤️ in Toronto. v{packageJson.version}</small>
            </div>
        </footer>
    </>
};

export default Layout;
