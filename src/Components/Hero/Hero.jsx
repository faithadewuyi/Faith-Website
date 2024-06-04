
import styles from './Hero.module.css';
// import CV from "../../../public/faith-cv.pdf"

function Hero() {
  return (
    <>
     <section id='hero' className={styles.container}>
      <div className={styles.colorMode}>
      <img
          src="faith2.jpg"
          className={styles.hero}
          alt="Faith's profile pic"
        />
        <img 
        className={styles.colorMode }
         src="sun.svg" 
         alt="toggle button"/>
      </div>

      <div className={styles.info}>
        <h1> Faith 
          <br/>
          Adewuyi
          </h1> 
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://x.com/adewuyi_faith" target="_blank">
              <img src="twitter-light.svg" alt="twitter-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/faith-adewuyi-64923542/" target="_blank">
              <img src="linkedin-light.svg" alt="linkedin-icon"/>
            </a>
            <a href="https://github.com/faithadewuyi" target="_blank">
              <img src="github-light.svg" alt="github-icon"/>
            </a>
          </span>
          <p className={styles.description}>I am a user-focused Front-end developer with almost two years of hands-on experience in creating dynamic user-friendly web applications using React.js and integrating them seamlessly with RESTful APIs. I am an innovative, creative and proven team player. I am committed to delivering captivating digital experiences through innovative design and robust functionality.</p>
          <a href="faith-cv.pdf" download>
            <button className='hover' > Resume</button>
          </a>
          </div>
     </section> 
    </>
  )
}

export default Hero;
