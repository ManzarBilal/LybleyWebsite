import Card from "@/components/Card";
import React from "react";
 

const serviceData = [
  {
    id: 1,
    image: "webDevelopment.png",
    title: "Web Development",
    
  },
  {
    id: 2,
    image: "mobileApp.png",
    title: "Mobile App",
 
  },
  {
    id: 3,
    image: "digitalMarketing.png",
    title: "Digital Marketing",
  
  },
  {
    id: 4,
    image: "uiUx.png",
    title: "UI UX Design",
  
  },
  {
    id: 5,
    image: "eCommerse.png",
    title: "E-Commerce Solution",
  
  },
  {
    id: 6,
    image: "mediaMarketing.png",
    title: "Social Media Marketing",
  
  },
  
];

const services  = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10 mt-12">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {serviceData.map((item) => (
              <Card isServices={true} key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default services;
