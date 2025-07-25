import React from "react";
import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-[5%] border-t border-yellow-500 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Newsletter */}
        <div className="flex-1">
          <h3 className="text-yellow-500 font-[cinzelregular] text-xl lg:text-2xl mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm mb-3 font-[gil] text-white">
            Get updates on new releases and exclusive deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-white border-2 border-white focus:outline-2 outline-amber-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Navbar Links */}
        <div className="flex-1">
          <h4 className="text-yellow-500 font-[cinzelregular] text-xl lg:text-2xl mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm font-[gil]">
            {["Home", "Shop", "About", "Contact"].map((text, idx) => {
              const paths = ["/", "/product", "/about", "/contact"];
              return (
                <li key={text}>
                  <NavLink
                    to={paths[idx]}
                    className="group relative inline-block text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {text}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h4 className="text-yellow-500 font-[cinzelregular] text-xl lg:text-2xl mb-4">
            Follow Us
          </h4>
          <div className="flex space-x-4 text-xl text-yellow-400">
            <a
              href="https://www.instagram.com/themancompany/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <IoLogoInstagram />

            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
<FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/Themancompany"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
<FaFacebookSquare />
            </a>
            <a
              href="https://www.youtube.com/@themancompany"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
<IoLogoYoutube />
            </a>
             <a
              href="https://www.linkedin.com/company/the-man-company/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <IoLogoLinkedin />

            </a>
             <a
              href="https://api.whatsapp.com/send/?phone=919315440573&text=Hey%21+I+would+like+to+know+more+about+Eau+De+Parfum&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
<IoLogoWhatsapp />

            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-yellow-500 font-[gil]">
        © {new Date().getFullYear()} ScentVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
