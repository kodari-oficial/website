import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { About } from './pages/about'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
