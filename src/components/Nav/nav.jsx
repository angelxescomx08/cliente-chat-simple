import { Link } from 'react-router-dom'

import './nav.css'

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to="/" className="link">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav