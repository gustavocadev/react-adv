import { NavLink, Outlet } from "react-router-dom"
import logo from "../../logo.svg"

const Layout = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Layout
