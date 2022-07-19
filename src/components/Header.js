import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li>
                    <Link className="menu__item" to="/blogs">Blogs</Link>
                </li>
                <li><Link className="menu__item" to="/blogs/new">New</Link></li>
            </ul>
        </div>
    )
}

export default Header