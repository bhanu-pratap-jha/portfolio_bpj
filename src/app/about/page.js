import Styles from './about.module.css';

export default function About() {
  const experience = [
    {
      title: "Full Stack Development Intern",
      company: "Octanet Technology",
      location: "Remote",
      duration: "May 2024 - September 2024",
      description: "Crafted an landing page for Ayura - an innovative welness brand of my creation, enhancing the brand’s digital footprint and user engagement by 20%. I also implemented MongoDB for efficient user sign-up database management, decreasing load time by 40%, demonstrating proficiency in backend technologies.",
    },
    {
      title: "Front-End Development Intern",
      company: "Octanet Technology",
      location: "Remote",
      duration: "August 2023 - September 2023",
      description: "Collaborated closely with a team of developers to enhance efficiency and user experience. I led the migration of the website's framework from ReactJS to NextJS, achieving a 40% improvement in loading efficiency. I also contributed by designing and implementing new user-facing features, writing robust, reusable code components and hooks to support future development and enhance customer engagement.",
    },
    
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>About Me</div>
      <div className={Styles.aboutText}>
        Hello there! I’m someone who loves diving into new technologies and tools with excitement. I jump into projects ready to learn and adapt, especially in Full-stack development and design, where I craft awesome web and mobile applications. Keeping up with the latest tech trends is key for me, as it helps me grow and improve. Whether I’m reading about new innovations or experimenting with ideas, I’m always eager to expand my skills and stay informed.
      </div>

      <div className={Styles.heading}>Work Experience</div>
      <div>
        {experience.map((item, index) => (
          <div className={Styles.work} key={index}>
            {/* Determine color based on index */}
            <div style={{ display: "flex", justifyContent: "space-between", color: getColor(index) }}>
              <div className={Styles.workTitle}>{item.title}</div>
              <div className={Styles.workDate}>{item.duration}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={Styles.workCompany}>{item.company}</div>
              <div className={Styles.workLocation}>{item.location}</div>
            </div>
            <div className={Styles.workDescription}>{item.description}</div>
          </div>
        ))}

<div className={Styles.heading} id="contact">
          Contact
        </div>
        <div className={Styles.contact}>
          Hit me up using my email{" "}
          <a href="mailto:mr.bhanupratapjha@gmail.com" style={{ color: "#fea55f" }}>
            mr.bhanupratapjha@gmail.com
          </a>{" "}
          or you can reach out to me through any of my social medias listed
          below.
        </div>
      </div>
    </div>
  );
}

// Function to determine color based on index
function getColor(index) {
  const colors = ["Coral", "Turquoise", "Salmon", "Lavender"];
  return colors[index % 4];
}

export function generateMetadata() {
  return {
    title: "About | Bhanu Pratap Jha",
    description: "About - Bhanu Pratap Jha",
  };
}
