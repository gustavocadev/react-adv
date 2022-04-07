import { Navigate, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "./01-lazyload/routes"
import Layout from "./components/layouts/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="*" element={<Navigate to="/lazy1" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
