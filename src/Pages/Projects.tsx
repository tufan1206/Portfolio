import React from "react";
//import profileImg from '../assets/profile.jpg'
import videoSrc from "../assets/project1.mp4";

const Projects = () => {
  return (
    <main className="min-h-screen pt-14 pl-12 pr-12 pb-12">
      <div>
        <h1 className="text-purple-800 text-4xl font-bold text-center mb-8">
          My Projects
        </h1>
      </div>
      <div className="container mx-auto rounded-lg shadow-lg p-6 bg-white flex flex-row space-x-6 mb-8">
        <video
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
          controls
          style={{ color: "transparent", height: "400px", width: "400px" }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="">
          <h1 className="text-purple-600 text-2xl font-medium mb-2">
            Basic Skin care realted website landing page
          </h1>
          <p className="text-black mb-4">
            This is only Landing page which contain a home page,about
            page,service page,contact page.
          </p>
          <h1 className="text-purple-600 text-xl font-medium mb-2">
            Technologies used :
          </h1>
          <div className="flex flex-row space-x-2">
            <button className="py-1 px-4 rounded-full shadow-lg bg-gray-200 text-purple-700 ">
              Next js
            </button>
            <button className="py-1 px-4 rounded-full shadow-lg bg-gray-200 text-purple-700 ">
              Tailwind CSS
            </button>
            <button className="py-1 px-4 rounded-full shadow-lg bg-gray-200 text-purple-700 ">
              shadcn/ui
            </button>
          </div>
        </div>
      </div>

      {/*Project 2 */}
      <div className="container mx-auto rounded-lg shadow-lg p-6 bg-white flex flex-row space-x-6 mb-8">
        <video
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
          controls
          style={{ color: "transparent", height: "400px", width: "400px" }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="">
          <h1 className="text-purple-600 text-2xl font-medium mb-2">
            My Portfolio
          </h1>
          <p className="text-black mb-4">
          This portfolio showcases my journey as a Front-End Developer, highlighting my skills in React.js and modern web technologies. It includes interactive components, responsive design, and projects that demonstrate my passion for creating user-friendly web applications
          </p>
          <h1 className="text-purple-600 text-xl font-medium mb-2">
            Technologies used :
          </h1>
          <div className="flex flex-row space-x-2">
            <button className="py-1 px-4 rounded-full shadow-lg bg-gray-200 text-purple-700 ">
              React js
            </button>
            <button className="py-1 px-4 rounded-full shadow-lg bg-gray-200 text-purple-700 ">
              Tailwind CSS
            </button>
          </div>
        </div>
      </div>
      
    </main>

    
  );
};

export default Projects;
