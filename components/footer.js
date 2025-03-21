import Link from "next/link";
import Styles from "./footer.module.css";

import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div style={{ display: "flex" }}>
        <div className={Styles.logo}>Find me on:</div>

        <a
          className={Styles.navbar_link}
          href="https://www.linkedin.com/in/bhanu-pratap-jha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          className={Styles.navbar_link}
          href="https://x.com/mbhanupratapjha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          className={Styles.navbar_link}
          href="https://www.instagram.com/mr.bhanupratapjha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <a
        className={Styles.navbar_link}
        href="https://github.com/bhanu-pratap-jha"
        target="_blank"
        rel="noopener noreferrer"
        style={{ borderLeft: "1px solid #1e2d3d" }}
      >
        @BhanuPratap <FaGithub />
      </a>
    </div>
  );
};

export default Footer;
