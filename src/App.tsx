import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users page</h1>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
