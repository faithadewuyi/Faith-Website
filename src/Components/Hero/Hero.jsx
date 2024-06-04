
import styles from './Hero.module.css';
function Hero() {
  return (
    <>
     <section id='hero'>
      <div className={styles.colorMode}>
        <img className={styles.hero}src="faith.JPG" alt="Faith's profile pic"/>
        <img className={styles.colorMode } src="moon.svg" alt="toggle button"/>
      </div>
     </section> 
    </>
  )
}

export default Hero;
