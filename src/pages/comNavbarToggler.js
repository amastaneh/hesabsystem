import React, { useState } from "react";

function NavbarToggler({ className }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        const navbarNav = document.getElementById("navbarNav");
        navbarNav.classList.toggle("show");
    };

    return (
        <button
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "none",
                padding: "0",
                cursor: "pointer",
                outline: "none",
                boxShadow: "none", // جلوگیری از بوردر فکوس
            }}
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleClick}
        >
            <span
                style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#000",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                    transformOrigin: "center",
                    marginTop: isOpen ? "7px" : "3px",
                }}
            ></span>
            <span
                style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#000",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    opacity: isOpen ? "0" : "1",
                }}
            ></span>
            <span
                style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#000",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                    transformOrigin: "center",
                    marginBottom: isOpen ? "7px" : "3px",
                }}
            ></span >
        </button >
    );
}

export default NavbarToggler;
