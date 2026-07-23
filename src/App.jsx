import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ExamPage from './pages/ExamPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  )
}
