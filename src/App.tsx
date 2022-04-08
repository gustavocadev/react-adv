import { Navigate, Route, Routes } from "react-router-dom"
import ShoppingPage from "./02-components-patterns/pages/ShoppingPage"
import Layout from "./components/layouts/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShoppingPage />} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users page</h1>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
