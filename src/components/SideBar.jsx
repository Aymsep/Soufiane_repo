import React,{useState} from 'react'
import './comp.css'

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(link)
  };
  return (
    <div className="app__sidebar">
      <h2>Menu</h2>
        <ul>
          <li><a onClick={() => handleLinkClick('section1')} href="#">Incident</a></li>
          <li><a onClick={() => handleLinkClick('section2')} href="#">Position</a></li>
          <li><a onClick={() => handleLinkClick('section3')} href="#">Mon Compte</a></li>
        </ul>
    </div>
  )
}

export default SideBar