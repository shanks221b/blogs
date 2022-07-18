import React from 'react'

const Header = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li><a className="menu__item" href="#">Blogs</a></li>
                <li><a className="menu__item" href="#">New</a></li>
            </ul>
        </div>
    )
}

export default Header