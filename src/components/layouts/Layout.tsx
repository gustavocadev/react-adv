import { NavLink, Outlet } from "react-router-dom"
import logo from "../../logo.svg"
import { routes } from "../../routes/routes"

const Layout = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React logo" />
        <ul>
          {routes.map(({ to, name, path }) => (
            <li key={path}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Layout
