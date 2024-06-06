
import styles from './Hero.module.css';
import heroImg from '../../assets/faith2.jpg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import {  useTheme } from '../../Content/ThemeContext';

function Hero() {
  const { theme,  toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <>
     <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
      <img
          src={heroImg}
          className={styles.hero}
          alt="Faith's profile pic"
        />
        <img 
        className={styles.colorMode }
         src={themeIcon} 
         alt="toggle button"
         onClick={toggleTheme}
         />
      </div>

      <div className={styles.info}>
        <h1> Faith Adewuyi
          </h1> 
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://x.com/adewuyi_faith" target="_blank">
              <img src={twitterIcon}alt="twitter-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/faith-adewuyi-64923542/" target="_blank">
              <img src={linkedinIcon} alt="linkedin-icon"/>
            </a>
            <a href="https://github.com/faithadewuyi" target="_blank">
              <img src={githubIcon} alt="github-icon"/>
            </a>
          </span>
          <p className={styles.description}>I am a Front-end developer with hands-on experience in creating dynamic user-friendly web applications using React.js. I am an innovative, creative and proven team player. I am committed to delivering captivating digital experiences through innovative design and robust functionality.</p>
          <a href="faith-cv.pdf" download>
            <button className='hover' > Resume</button>
          </a>
          </div>
     </section> 
    </>
  )
}

export default Hero;
