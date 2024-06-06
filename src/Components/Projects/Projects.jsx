
import styles from './Projects.module.css';
import marketmate from '../../assets/marketmate.png';
import spendtrack from '../../assets/spendtrack.png';
import abitim from '../../assets/abitim.png';
import decordreams from '../../assets/decordreams.png';
import ProjectCard from '../../Content/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={marketmate}
          liveLink="https://market-mate.netlify.app/"

          repoLink="https://github.com/faithadewuyi/MarketMate.git"

          h3="MarketMate"
          p="An application that connects users and, service providers"
        />
        <ProjectCard
          src={spendtrack}
          liveLink="spend-track-eta.vercel.app" 
          
          repoLink="https://github.com/faithadewuyi/SpendTrack.git"
          h3="Spend Track"
           p="A web application designed to help manage finances."
        />
        <ProjectCard
          src={abitim}
          liveLink="https://abitim-farms.vercel.app/" 

          repoLink="https://github.com/faithadewuyi/Abitim-Farms.git"

          h3="Abitim Farms"

          p="A responsive simple two-page farm website"
        />
        <ProjectCard
          src={decordreams}
          liveLink=" decor-dreams.vercel.app" 
          repoLink="https://github.com/faithadewuyi/GIT-Assessment.git"

          h3="DecorDreams"
          
           p="A website showcasing innovative decor solutions"
        />
      </div>
    </section>
  );
}

export default Projects;
