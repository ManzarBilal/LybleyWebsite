import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HomePage = () => {

    return (
        <div className=''>
            <div className="h-[680px] relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-[680px] w-full object-cover z-[-1]"
                >
                    <source src={"/videoHome.mp4"} type="video/mp4" />
                </video>
                <div className=" grid md:grid-cols-2 sm:grid-cols-1 h-full">
                    <div className="h-full flex justify-center items-center p-4  ">
                        <div className="container grid grid-cols-1 gap-2">
                            <div className='animatedLeft text-secondary font-bold text-xl'>We are creative </div>
                            <div className='animatedLeft text-white font-bold text-5xl'>Best IT <span className='text-secondary '>Solution</span></div>
                            <div className='animatedLeft text-white font-bold text-5xl'> Company</div>
                            <div className='animatedLeft mt-3 text-white text-xl'>
                                <TypeAnimation sequence={[
                                  'Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success. Specializing in: Web Development',1000,
                                  'Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success. Specializing in: E-commerce Solutions',1000,
                                  'Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success. Specializing in: Mobile App Development',1000,
                                  'Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success. Specializing in: UI/UX Design',1000,
                                  'Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success. Specializing in: Digital Marketing',1000,
                                  'Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success. Specializing in: Social Media Marketing',
                                  1000
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                                cursor={false}
                                />
                                </div>
                            <div className='animatedLeft mt-4'>
                                <button
                                    className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1  "

                                >
                                    Explore More
                                </button>
                                <button
                                    className="mx-4 bg-gradient-to-r from-white to-white hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-secondary px-3 py-1  "

                                >
                                    Explore More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage