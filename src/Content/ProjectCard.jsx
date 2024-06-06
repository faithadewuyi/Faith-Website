
import styles from '../Components/Projects/Projects.module.css';

function ProjectCard({ src, liveLink, repoLink, h3, p }) {
  return (
    <div className={styles.card}>
      <img className={`${styles.image} hover`} src={src} alt={`${h3} logo`} />
      <h3 className={styles.title}>{h3}</h3>
      <p className={styles.description}>{p}</p>
      <div className={styles.links}>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>LiveLink</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>Github Repository</a>
      </div>
    </div>
  );
}

export default ProjectCard;