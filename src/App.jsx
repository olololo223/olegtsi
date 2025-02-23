import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import Footer from './components/Footer';
import Blog from './pages/Blog';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
