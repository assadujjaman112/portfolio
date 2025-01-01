import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav>
        <h1 className="text-center font-bold text-xl mb-3">Socials</h1>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/assadujjaman-murad-ba2393253/">
            <FaLinkedin className="text-3xl text-blue-800 bg-white"></FaLinkedin>{" "}
          </a>

          <a href="https://twitter.com/muradWho">
            <AiOutlineTwitter className="text-3xl"></AiOutlineTwitter>
          </a>

          <a href="https://www.facebook.com/assadujjaman.murad.7/">
            <MdOutlineFacebook className="text-3xl bg-white text-blue-800"></MdOutlineFacebook>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2023 - All right reserved{" "}
          <span className="font-semibold">Assadujjaman Murad</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
