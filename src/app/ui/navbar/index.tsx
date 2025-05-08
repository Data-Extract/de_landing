import React from "react";
import DesktopNavbar from "./desktop";
import MobileNavbar from "./mobile";

export default function Navbar() {
  return (    
      <div className="relative z-20">
        <DesktopNavbar />
        <MobileNavbar />
      </div>  
  );
}
