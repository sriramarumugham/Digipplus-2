import React from 'react'
import '../styles/Header.scss'
function Header() {
  return (
    <div className='headerWrapper headerSession'>
      <div className='searchSession'>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input />
      </div>
      <div className="userSession">
      <i class="fa-solid fa-bell logo"></i>
      <i class="fa-solid fa-user logo"></i>
      <h4 className="userName">full user name</h4>
      </div>
    </div>
  )
}

export default Header;