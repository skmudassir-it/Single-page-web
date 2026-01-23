import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import ImageResizer from './features/ImageResizer'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="resizer" element={<ImageResizer />} />
        {/* Fallback route or 404 can go here */}
        <Route path="*" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App
