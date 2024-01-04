import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
 

const FooterLinks = [
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Insights",
    link: "/insights",
  },
  {
    title: "About",
    link: "/about",
  },
  
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Contact us",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950  relative overflow-hidden  ">
         <div className="bg-gradient-to-r from-[#a7a7a9] to-[#FFFFFF] ">
        <div className="container">
          {/* <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl"> */}
          <div className="grid md:grid-cols-3 py-5   rounded-t-xl">
            <div className="py-8 ">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
               <Link href={"/"}> <img src={"/Logo.png"} alt="" className="max-h-[64px] rounded-lg" /></Link>
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
              Discover Lybley for web and app development, e-commerce solutions, CRM services, and impactful digital and social media marketing. Elevate your brand's digital presence with our comprehensive suite of tailored solutions designed to drive growth and engagement.
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p className="text-sm">A-9, A Block, Sector 59, Noida, Uttar Pradesh 201301</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 7011071202</p>
              </div>
              {/* social handles */}
             
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          href={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          href={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          href={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center  border-t-2 border-gray-300/50 ">
            <div className="text-center py-5 text-primary  ">
              @copyright 2024 All rights reserved || Made  by Lybley India Pvt Ltd.
            </div>
            <div className=" ">
                <div className="flex items-center gap-3  ">
                  <Link href="#">
                    <FaInstagram className="text-3xl" />
                  </Link>
                  <Link href="#">
                    <FaFacebook className="text-3xl" />
                  </Link>
                  <Link href="#">
                    <FaLinkedin className="text-3xl" />
                  </Link>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
