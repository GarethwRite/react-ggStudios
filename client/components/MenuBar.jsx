import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { MenuBarData } from './MenuBarData'
import {IconContext} from 'react-icons'

function MenuBar() {
  // class MenuBar extends React.Component {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  // render() {
  return (
    <IconContext.Provider value={{color: '#161C2E'}}>
    <div className='navbar'>
      <Link to='/' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar} >
          <li className='navbar-toggle'>
            <Link to='/' className="menu-bars" >
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {MenuBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </IconContext.Provider>

  )
}

export default MenuBar

// onclick="myFunction(this)"
{/* <div class="container" onClick={myFunction(this)}>
<div class="bar1" ></div>
<div class="bar2"></div>
<div class="bar3"></div>
</div> */}


// myFunction = (x) => {
//  document.body.classList.toggle("change")
// }

{/* <li className='navbar-toggle'> <Link to='/news' className="menu-bars" ><AiIcons.AiOutlineClose/>News</Link></li><br></br>
  <li className='navbar-toggle'><Link to='/games' className="menu-bars" ><AiIcons.AiOutlineClose/>Games</Link></li><br></br>
  <li className='navbar-toggle'><Link to='/mobileApps' className="menu-bars" ><AiIcons.AiOutlineClose/>Apps</Link></li><br></br>
  <li className='navbar-toggle'><Link to='/forum' className="menu-bars" ><AiIcons.AiOutlineClose/>Forum</Link></li><br></br>
  <li className='navbar-toggle'><Link to='/store' className="menu-bars" ><AiIcons.AiOutlineClose/>Store</Link></li><br></br>
  <li className='navbar-toggle'><Link to='/about' className="menu-bars" ><AiIcons.AiOutlineClose/>About</Link></li><br></br> */}