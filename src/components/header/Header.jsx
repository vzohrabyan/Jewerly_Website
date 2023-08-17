import React from 'react'
import location from "../../images/location.svg"
import Search from './search/Search'
import "./Header.scss"
//Images
import hearth from "../../images/heart.svg"
import bag from "../../images/bag.svg"
import user from "../../images/user.svg"

const Header = () => {
  return (
    <header>
        <div className="leftSide">
            <img src={location} alt="location" />
            <ul>
                <li>JEWERLY</li>
                <li>NEW RELEASES</li>
                <li>GIFTS</li>
            </ul>
        </div>
        <h1><a href='/'>A P O L L O N I A N</a></h1>
        <div className="rightSide">
            <Search />
            <img src={hearth} alt="Hearth" />
            <img src={bag} alt="Bag" />
            <img src={user} alt="User" />
        </div>
    </header>
  )
}

export default Header