import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <h3 className="text-md font-semibold text-gray-600 mb-4">
            Empowering Businesses with Data-Driven Insights
          </h3>
          <p className="text-gray-700 mb-4">
            At Data Extract, we specialize in transforming raw data into actionable intelligence.
            Our cutting-edge business intelligence solutions help organizations optimize
            performance, uncover trends, and make informed decisions.
          </p>
          <p className="text-gray-700 mb-6">
            From data extraction and processing to advanced AI-driven analytics, we provide secure,
            scalable, and efficient solutions tailored to your needs. Whether you're a startup or a
            global enterprise, our expertise in big data, automation, and visualization will elevate
            your business strategy.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
          >
            🚀 Unlock the power of data today
          </a>
        </div>

        
        <div className="relative w-full h-full">
          {/* Triángulo decorativo rotado 180° y 40% más grande */}
          <div
            className="absolute -bottom-24 -right-28 w-[550%] h-[530%] bg-indigo-600 z-0"
            style={{
              clipPath: 'polygon(0 0, 25% 0, 0 27%)',
              transform: 'rotate(180deg)',
            }}
          />
          {/* Imagen */}
          <img
            src="/about.jpg"
            alt="Team working with data"
             className="relative z-10 w-full rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
