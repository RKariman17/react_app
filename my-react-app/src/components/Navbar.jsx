
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink style={{padding:10}}exact to="/" className="navbar-brand">Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${location.pathname === '/users' ? 'active' : ''}`}>
                            <NavLink to="/users" className="nav-link">Users {location.pathname === '/users' && <span className="sr-only">(current)</span>}</NavLink>
                        </li>
                        <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                            <NavLink to="/login" className="nav-link">Login {location.pathname === '/login' && <span className="sr-only">(current)</span>}</NavLink>
                        </li>
                        <li className={`nav-item ${location.pathname === '/register' ? 'active' : ''}`}>
                            <NavLink to="/register" className="nav-link">Register {location.pathname === '/register' && <span className="sr-only">(current)</span>}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
// const Navbar = () => {
//     return(
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="/">Home</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <a className="nav-link" href="/users">Users <span class="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/login">Login</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/Register">Regiser</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//     </>
// )}

export default Navbar;