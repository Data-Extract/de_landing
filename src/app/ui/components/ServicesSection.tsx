import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        <ServiceCard
          image="/img1.jpg"
          title="Data Consulting"
          description="provide expert solutions to streamline data processes and enhance insights. From optimizing workflows to building scalable pipelines,
                      we help transform raw data into valuable intelligence, empowering your business with data-driven decisions."
        />
        <ServiceCard
          image="/img2.jpg"
          title="Cloud Storage"
          description=" provides secure and scalable solutions for your business. Whether storing large datasets, managing backups, or ensuring availability, 
                      our cloud adapts to your needs. Keep your data protected, accessible, and prepared for growth."
        />
        <ServiceCard
          image="/img3.jpg"
          title="Web Scraping"
          description=" efficiently gathers data from any website at scale. Whether you need real-time updates, competitor insights, or industry trends,
                         we create tailored solutions to extract key information, turning raw web data into valuable business intelligence."
        />
        <ServiceCard
          image="/img4.jpg"
          title="Business Intelligence"
          description="converts raw data into insights. With dashboards and reports, we help you track key metrics and find growth opportunities. 
                       Stay ahead with data-driven strategies and smarter decisions using our tailored BI solutions."
        />
      </div>
    </section>
  );
}
