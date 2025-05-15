import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white" 
    >
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Empowering Businesses with <br /> Advanced Data Analytics
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Harness the full potential of your data with cutting-edge analytics, secure data 
          management, and intelligent insights. Our innovative solutions drive efficiency, 
          optimize decision-making, and unlock new opportunities for your organization.
        </p>
       
      </div>
    </section>
  );
};

export default HeroSection;
