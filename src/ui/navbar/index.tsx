import React from "react";
import DesktopNavbar from "./desktop";
import MobileNavbar from "./mobile";
import "@/ui/globals.css";

export default function Navbar() {
    return (
        <React.Fragment>
            <DesktopNavbar />
            <MobileNavbar />
        </React.Fragment>
    );
}