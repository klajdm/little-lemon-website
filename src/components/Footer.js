import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../images/small_logo.png";

const Footer = () => {
    return(
        <footer className="fixed bottom-0 left-0 w-full bg-[#495E57] text-white px-8 py-4 z-50 border-t-4 border-[#F4CE14]">
            <section className="flex justify-between items-center max-w-6xl mx-auto flex-wrap gap-8">
                <div className="flex items-center gap-4">
                    <img src={small_logo} alt="Little Lemon Logo" className="h-8 w-auto" />
                    <p className="m-0 text-sm opacity-90">© {new Date().getFullYear()} Little Lemon Restaurant</p>
                </div>
                
                <div className="flex items-center gap-4 flex-wrap">
                    <span className="m-0 text-sm opacity-90">Contact: (312) 555-LEMON</span>
                    <span className="m-0 text-sm opacity-90">|</span>
                    <span className="m-0 text-sm opacity-90">123 Mediterranean Ave, Chicago</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <Link 
                        to="/privacy-policy"
                        className="text-[#F4CE14] no-underline text-sm mx-2 transition-opacity duration-300 hover:opacity-80"
                    >
                        Privacy Policy
                    </Link>
                    <span className="m-0 text-sm opacity-90">|</span>
                    <Link 
                        to="/terms-and-conditions"
                        className="text-[#F4CE14] no-underline text-sm mx-2 transition-opacity duration-300 hover:opacity-80"
                    >
                        Terms & Conditions
                    </Link>
                    <span className="m-0 text-sm opacity-90">|</span>
                    <Link 
                        to="/contact"
                        className="text-[#F4CE14] no-underline text-sm mx-2 transition-opacity duration-300 hover:opacity-80"
                    >
                        Contact
                    </Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer;