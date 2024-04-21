import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './pages/home'
import TentangPages from './pages/tentang'
import NavbarComponents from './components/navbar-nav'
import FooterComponents from './components/footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarComponents />
        </header>
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
          <Route path="/tentang" element={<TentangPages />}></Route>
        </Routes>
        <footer>
          <FooterComponents />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App
