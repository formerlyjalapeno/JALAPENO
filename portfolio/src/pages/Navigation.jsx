import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav__left">
                    <h1>JALAPEÑO</h1>
                    <p>ROMANS 12:19 KJV</p>
                </div>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/aboutme">ABOUT ME</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/coding">CODING</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Navigation;