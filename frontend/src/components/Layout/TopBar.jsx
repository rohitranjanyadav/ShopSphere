import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.tiktok.com/@rowhit59?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <AiOutlineTikTok className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/rowhit59?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohitranjanyadav/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship all over Nepal !</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:123456789" className="hover:text-gray-300">
            +123456789
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
