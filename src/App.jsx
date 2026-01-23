import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import ImageResizer from './features/ImageResizer'
import SlugGenerator from './features/SlugGenerator'
import HashtagOptimizer from './features/HashtagOptimizer'
import ContentScheduler from './features/ContentScheduler'
import CaptionStudio from './features/CaptionStudio'
import AnalyticsDashboard from './features/Analytics'
import InfluencerManager from './features/InfluencerManager'
import CommunityManager from './features/CommunityManager'
import AssetVault from './features/AssetVault'
import ReportStudio from './features/ReportStudio'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="resizer" element={<ImageResizer />} />
        <Route path="slugs" element={<SlugGenerator />} />
        <Route path="hashtags" element={<HashtagOptimizer />} />
        <Route path="scheduler" element={<ContentScheduler />} />
        <Route path="captions" element={<CaptionStudio />} />
        <Route path="analytics" element={<AnalyticsDashboard />} />
        <Route path="analytics" element={<AnalyticsDashboard />} />
        <Route path="collabs" element={<InfluencerManager />} />
        <Route path="community" element={<CommunityManager />} />
        <Route path="assets" element={<AssetVault />} />
        <Route path="reports" element={<ReportStudio />} />

        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />

        {/* Fallback route or 404 can go here */}
        <Route path="*" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App
