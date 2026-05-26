import { Route, Routes } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/footer'
import { BlogPage } from './pages/blog'
import { CommunityPage } from './pages/community'
import { Features } from './pages/features'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { Pricing } from './pages/pricing'

function App() {
  return (
    <div className="min-h-screen font-sans text-heading">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App