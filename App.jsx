import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CreateHelpCenter from './components/CreateHelpCenter'
import HelpCenter from './components/HelpCenter'
import ViewHelpCenter from './components/ViewHelpCenter'
import Navbar from './components/Navbar'
import CardDetail from './components/CardDetail'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-help-center" element={<CreateHelpCenter />} />
        <Route path="/dashboard" element={<HelpCenter />} />
        <Route path="/help-center/:title" element={<CardDetail />} />
        <Route path='/view-card' element={<ViewHelpCenter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
