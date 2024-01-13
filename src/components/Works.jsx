import React from "react";
import { projects } from "../data";

const Works = () => {
  function getGitHubLink(title) {
    const githubLinks = {
      NetflixGPT: "https://github.com/ShivamPandey001/netflix-gpt",
      BiteBoutique: "https://github.com/ShivamPandey001/namaste-react",
      YoutubeThreads: "https://github.com/ShivamPandey001/youTube-threads",
    };
    return githubLinks[title] || "#"; // Return '#' if title is not found
  }

  function getLiveDemoLink(title) {
    const liveDemoLinks = {
      NetflixGPT: "https://sp-netflixgpt.netlify.app/", 
      BiteBoutique: "https://biteboutique.netlify.app/", 
      YoutubeThreads: "https://sp-netflixgpt.netlify.app/", 
    };
    return liveDemoLinks[title] || "#"; // Return '#' if title is not found
  }
  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 text-black dark:text-gray-400'>
      <h4 className='text-3xl font-bold text-black dark:text-white mt-10 '>
        Projects
      </h4>

      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center '>
        {projects.map((p, index) => (
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            key={index}
            className='w-[350px] h-[450px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-lg'
          >
            <img
              src={p.img}
              alt={p.name}
              className='w-full h-[250px] object-cover rounded-md '
            />

            <div className='w-full h-[100px] bg-white dark:bg-[#04133e]'>
              <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1 '>
                {p.title}
              </h4>
              <p className='text-sm text-black-900 px-1 '>{p.description}</p>
              <a
                href={getGitHubLink(p.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio--link"
              >
                <p className='m-2 text-sm text-red-600 px-1 uppercase underline underline-offset-4'>{p.link}↗️</p>
              </a>
              <a
                href={getLiveDemoLink(p.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio--link"
              >
                <p className='m-2 text-sm text-orange-600 px-1 uppercase underline underline-offset-4'>{p.liveDemo}↗️</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
