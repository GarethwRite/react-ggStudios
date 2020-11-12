import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { MenuBarData } from './MenuBarData'
import { IconContext } from 'react-icons'

// function MenuBar() {
  class MenuBar extends React.Component {
    state = {
      sidebar: false
    }
  // const [sidebar, setSidebar] = useState(false)

  // showSidebar = () => setSidebar(!sidebar)
  showSidebar = () => this.setState({
    sidebar: !this.state.sidebar
  })

  render() {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={this.showSidebar} />
        </Link>
        <div className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={this.showSidebar} >
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
}
export default MenuBar
