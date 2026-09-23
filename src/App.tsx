import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/Home"
import ComingSoonPage from "./pages/ComingSoon"

// Set to true to disable all other pages and show the Coming Soon launch page
const COMING_SOON_MODE = true

const App = () => {
  if (COMING_SOON_MODE) {
    return (
      <Routes>
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
