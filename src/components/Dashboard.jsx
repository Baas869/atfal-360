import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { SidebarData } from '../Data/SidebarData'
import {IconContext} from 'react-icons'


function Dashboard() {
  const  [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  
    // useEffect(() =>{
    //     if(dashboardTab === true){
    //       const dashNav = document.querySelector('.dashboard')
    //       dashNav.setAttribute('open', 'open' )
    //       dashNav.style.transform= 'transformX(30rem)'
    //       console.log(dashNav)
    //     }
    // }, [openDashTab])
  return (
    // <div className={open ? 'card dashboard open' : 'card dashboard'}>
    //     <button className='close-menu'>
    //         <FaTimes />
    //     </button>
    //   <div>
    //     <h1>Atfal Statistics</h1>
    //   </div>
    //   <div className='navbar-links'>
    //     <NavLink to='/' activeClassName='active' className='navbar-item'>
    //         <FaDesktop className='dash-i'/>
    //         <span className='mg-left'>Dashboard</span>
    //     </NavLink>
    //     <NavLink to='/statistic' activeClassName='active' className='navbar-item'>
    //         <FaDesktop className='dash-i'/>
    //         <span className='mg-left'>Statistics</span>
    //     </NavLink>
    //   </div>
    // </div>
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
          <Link to='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
          <div>
              <Link to='/'><h3>Dashboard</h3></Link>
            </div>
            <div className=''>
              <ul className='mobile-view--nav'>
                <li>
                    <Link to='/'><FaIcons.FaUser />Log out</Link>
                </li>
              </ul>
          </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}<span className='m-nav'>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Dashboard
