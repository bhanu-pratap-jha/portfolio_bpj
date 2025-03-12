import LottieAnimation from "./animation";
import animationData from "./animationfile.json"
import Styles from "./page.module.css";
import {FiChevronRight} from "react-icons/fi"



export default function Home() {
  const resumeLink = (
    <a
      href="/Bhanu_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#E99287" }}
    >
      &quot;Check out my resume&quot;
    </a>
  );

  return (
    <main>
      <div className={Styles.container}>
        <div className={Styles.textContainer}>
          <div>Hi, all! I am</div>
          <div className={Styles.landingName}>Bhanu Pratap Jha</div>
          <div className={Styles.landingSubtitle}>
            {" "}
            
            <FiChevronRight />Full Stack Developer
          </div>
          <div className={Styles.landingAbout}>
            /** I am a Final year student pursuing
            <br />
            * BTech in Computer Science & Engineering at
            <br />* GITA Autonomous College. */
          </div>
          <div className={Styles.landingResume}>
            const &nbsp;<span style={{ color: "#43D9AD" }}>resumeLink</span>{" "}
            &nbsp;= &nbsp;
            <a
              href="/BPJ_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E99287" }}
            >
              &quot;Check out my resume &quot;
            </a>
          </div>
        </div>
        <div className={Styles.animationContainer}><LottieAnimation animationData={animationData} /></div>
      </div>
    </main>
  );
}
