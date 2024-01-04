import Link from "next/link";
import React from "react";
 

const  Card = ({ isServices, image, date, title, description, author,index }) => {
    
  return (
    <>
      <Link
        href={`/blogs/${title}`}
        onClick={() => {
          window.scrollTo(0, 0);
          // window.scroll({
          //   top: 0,
          //   left: 0,
          //   behavior: "smooth",
          // });
        }}
        state={{ image, date, title, description, author }}
      >
        <div className={`p-4 bg-gradient-to-r ${index>=3 ? "from-[#FFFFFF] to-[#a7a7a9]" : "from-[#a7a7a9] to-[#FFFFFF]"} shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg m-2`}>
          <div className="overflow-hidden">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[200px] w-[200px] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
        {isServices  
       ? <div className="space-y-2 py-1 flex justify-center">
        <div>
            <h1 className="line-clamp-1 text-center font-bold">{title}</h1>
            <p className="text-center">{description}</p>
            </div>
          </div>
       : <>
         <div className="flex justify-between pt-2 text-slate-600">
            <p>{date}</p>
            <p className="line-clamp-1">By {author}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold">{title}</h1>
            <p className="line-clamp-2">{description}</p>
          </div>
          </>
}
        </div>
      </Link>
    </>
  );
};

export default  Card;
