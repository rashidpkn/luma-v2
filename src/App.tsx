import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/Home"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App