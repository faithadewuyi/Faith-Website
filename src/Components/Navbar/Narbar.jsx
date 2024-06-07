import { useState } from 'react'
import '../Navbar/NavbarStyles.css'
function Narbar() {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <nav className='header'>
        <a href="#">Faith⭐ </a>
        <div> 
          <ul id='navbar' className={isOpen ? 'show' : ''}>
            <li><a href="">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
                   
          </ul>
         </div>
         <div id="mobile"  onClick={toggleMenu}>
          {isOpen ? <i className= "fas fa-times"></i> : <i className ="fas fa-bars"></i>}
          
         </div>
      </nav>
      
    </>
  )
}

export default Narbar;
