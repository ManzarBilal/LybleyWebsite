import React from 'react'


const HomePage = () => {

    return (
        <div className=''>
            <div className="h-[600px] relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]"
                >
                    <source src={"/videoHome.mp4"} type="video/mp4" />
                </video>
                <div className=" grid grid-cols-2   bg-black/20 h-full">
                    <div className="h-full flex justify-center items-center p-4 bg-primary/10">
                        <div className="container grid grid-cols-1  gap-2">
                            <div className='animatedText text-[#f473f4] font-bold text-xl'>We are creative </div>
                            <div className='animatedText text-white font-bold text-5xl'>Best IT <span className='text-[#6669ff] '>Solution</span></div>
                            <div className='animatedText text-white font-bold text-5xl'> Company</div>
                            <div className='animatedText font-bold text-white text-xl'>Empowering businesses with top IT solutions and unparalleled marketing strategies for digital success.</div>
                            <div className=''>
                                <button
                                    className="animatedText bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1  "

                                >
                                    Explore More
                                </button>
                                <button
                                    className="animatedText mx-4 bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1  "

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