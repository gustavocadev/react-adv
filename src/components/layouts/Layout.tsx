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
              to="/lazy1"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lazy 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lazy2"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lazy 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lazy3"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Lazy 3
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
