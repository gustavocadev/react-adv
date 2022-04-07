import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
// import { LazyPage1, LazyPage2, LazyPage3 } from "./01-lazyload/routes"
import Layout from "./components/layouts/Layout"
import { routes } from "./routes/routes"

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
