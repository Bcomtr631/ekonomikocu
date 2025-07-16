import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext';

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import EducationPage from './pages/EducationPage'
import CommunityPage from './pages/CommunityPage'
import AnalysisPage from './pages/AnalysisPage'
import ProfilePage from './pages/ProfilePage'
import ToolsPage from './pages/ToolsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
   <AuthProvider>
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/haberler" element={<NewsPage />} />
            <Route path="/egitim" element={<EducationPage />} />
            <Route path="/topluluk" element={<CommunityPage />} />
            <Route path="/analiz" element={<AnalysisPage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/araclar" element={<ToolsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
   </AuthProvider>
  );
}

export default App

