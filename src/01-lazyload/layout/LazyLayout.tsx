import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPage2, LazyPage3 } from "../routes"
import LazyPage1 from "../routes/LazyPage3"

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink to={"lazy1"}>{"Lazy 1"}</NavLink>
        </li>
        <li>
          <NavLink to={"lazy2"}>{"Lazy 2"}</NavLink>
        </li>
        <li>
          <NavLink to={"lazy3"}>{"Lazy 3"}</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  )
}
export default LazyLayout
