import Link from 'next/link'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const contact = () => {
  return (
    <div className='container py-3 sm:py-0 '>
      <div className='py-10 mt-16'>
        <div className='font-bold text-5xl text-center'>
          Contact us
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
          <div>
            <div>
              ONLINE INQUIRY
            </div>
            <div>
              ONLINE INQUIRY
            </div>
          </div>
          <div>
            <div className='mt-8 font-bold text-4xl'>
            Get in Touch
            </div>
            <div className='mt-4'>
              <div>Have a question, feedback, or just want to say hello? We'd love to hear from you! Use the following methods to get in touch with us:</div>
              <div className='mt-4 font-bold text-3xl'>Contact Information</div>
              <div className='mt-4 font-bold text-2xl'>Address:</div>
              <div className='font-bold'>Lybley India Pvt Ltd.</div>
              <div>A-9, A Block, Sector 59, Noida, Uttar Pradesh 201301</div>
              <div className='mt-4 font-bold text-2xl'>Email :</div>
              <div>lybley@gmail.com</div>
              <div className='mt-4 font-bold text-2xl'>Contact No. :</div>
              <div>7011071202</div>
              <div className='mt-4 font-bold text-2xl'>Social Media</div>
              <div>Connect with us on social media for updates, news, and more:</div>
              <div className="flex items-center gap-3 mt-4 ">
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
  )
}

export default contact