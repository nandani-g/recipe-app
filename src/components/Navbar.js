import { Link } from "react-router-dom"



import { useState } from "react"
import Sidebar from './Sidebar'
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Router } from "react-router-dom"
import { dom } from "@fortawesome/fontawesome-svg-core"

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipe", path: "/recipes", icon: faList },
    { name: "Settings", path: "/settings", icon: faCog }
  ]


  function closeSidebar(){
    setShowSidebar(false)
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">F<span>oo</span>diesHub</a>
        <div className="nav-links">
          {links.map(link => (
            <Link  to = {link.path} key={link.name}>
              <FontAwesomeIcon icon={link.icon} /> {link.name}
            </Link>
          ))}
        </div>
        <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar&& <Sidebar close = {closeSidebar} links ={links} /> }
      
    </>
  )
}