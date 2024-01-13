import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          Bangalore, IN
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p><a href="mailto:cse.shivam98@GMAIL.COM">cse.shivam98@gmail.com</a></p>
          <p>+91 7266963636</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>
        <div className="text-center">
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Let's Connect</h2>
        <p className="text-sm	md:font-weight: 600 md:p-0 md:text-lg">
          If you are looking to get ahold of me, you can send me an email at <a href="mailto:cse.shivam98@gmail.com">cse.shivam98@gmail.com</a>.
          <br />
          <p className="text-center">You can also find me on</p>
        </p>
      </div>


        </p>

        <div className='flex gap-10 text-white text-2xl mb-10 '>
          <a href="https://github.com/ShivamPandey001">
            <BsGithub className='hover:scale-125' />
          </a>
          {/* <a href="https://www.facebook.com/your-facebook-profile">
            <BsFacebook className='hover:scale-125' />
          </a> */}
          <a href="https://www.instagram.com/heyits.shivam/">
            <BsInstagram className='hover:scale-125' />
          </a>
          <a href="https://www.linkedin.com/in/shivampandey001/">
            <BsLinkedin className='hover:scale-110' />
          </a>
          <a href="https://twitter.com/TheShivam_P">
            <AiFillTwitterCircle className='hover:scale-125' />
          </a>
        </div>


        <p className='text-gray-400 text-md tracking-wider'>@2024 Shivam Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
