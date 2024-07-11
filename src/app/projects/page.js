import Image from 'next/image';
import Styles from './project.module.css';
import Indusby from '../../../components/images/indusbyFigma.webp'
import Notepage from '../../../components/images/NoteFigma.webp'
const projects = [
    {
        name: "NotePage",
        description: "To-DO-List application for organizing and prioritizing daily tasks.",
        technologies: "ReactJS, NodeJS, Bootstrap",
        link: "https://github.com/bhanu-pratap-jha/NotePage",
        image: Notepage,
    },
    {
        name: "Atmospheric",
        description: "A weather platform delivering real-time and detailed forecasts.",
        technologies: "Javascript, NodeJS, ExpressJS",
        link: "https://github.com/bhanu-pratap-jha/Weather-Website",
        image: Indusby,
    }
];

export default function Projects() {
    return (
        <div className={Styles.container}>
            <div className={Styles.heading}>Projects</div>
            <div className={Styles.projects} >
                {projects.map((project, index) => (
                    <div className={Styles.project} key={index}>
                        <div className={Styles.project}>{project.name}
                        <span style={{ color: "#607b96", fontSize: "0.8rem" }} > // {project.technologies}</span></div>
                        <div className={Styles.projectCard}>
                        <div className={Styles.projectImage}>{project.image && (<Image alt={project.name}src={project.image} layout="responsive" style={{ objectFit: "cover", height: "100%" }}/>)}</div>
                        <div className={Styles.projectTitle}>{project.description}<a href={project.link} target="_blank" rel="noopener noreferrer"><div className={Styles.projectButton}>View Project</div></a></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function generateMetadata() {
    return {
        title: "Projects | Bhanu Pratap Jha",
        description: "Projects made by Bhanu Pratap Jha"
    };
}
