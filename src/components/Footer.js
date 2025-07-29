import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
    const footerStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#495E57",
        color: "#FFFFFF",
        padding: "1rem 2rem",
        boxSizing: "border-box",
        zIndex: 999,
        borderTop: "3px solid #F4CE14"
    };

    const sectionStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        flexWrap: "wrap",
        gap: "2rem"
    };

    const logoStyle = {
        height: "30px",
        width: "auto"
    };

    const textStyle = {
        margin: 0,
        fontSize: "0.9rem",
        opacity: 0.9
    };

    const linkStyle = {
        color: "#F4CE14",
        textDecoration: "none",
        fontSize: "0.85rem",
        margin: "0 0.5rem"
    };

    return(
        <footer style={footerStyle}>
            <section style={sectionStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <img src={small_logo} alt="Little Lemon Logo" style={logoStyle} />
                    <p style={textStyle}>© 2024 Little Lemon Restaurant</p>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <span style={textStyle}>Contact: (312) 555-LEMON</span>
                    <span style={textStyle}>|</span>
                    <span style={textStyle}>123 Mediterranean Ave, Chicago</span>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button 
                        onClick={() => alert('Privacy policy page would be implemented here')}
                        style={{...linkStyle, background: 'none', border: 'none', cursor: 'pointer'}}
                    >
                        Privacy
                    </button>
                    <span style={textStyle}>|</span>
                    <button 
                        onClick={() => alert('Terms page would be implemented here')}
                        style={{...linkStyle, background: 'none', border: 'none', cursor: 'pointer'}}
                    >
                        Terms
                    </button>
                    <span style={textStyle}>|</span>
                    <button 
                        onClick={() => alert('Contact page would be implemented here')}
                        style={{...linkStyle, background: 'none', border: 'none', cursor: 'pointer'}}
                    >
                        Contact
                    </button>
                </div>
            </section>
        </footer>
    )
}

export default Footer;