import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import Footer from './components/Footer';
import Blog from './pages/Blog';
import { Button } from './pages/Button';
import { Text } from './pages/Text';
import { Input } from './pages/Input';

function App() {
  return (
    <>
    <Header/>
    <Button size="medium" color="primary" title="Принять" />
    <Text size="large" color="primary" align="center" title="Hello, world!"/>
    <Input size="medium" borderColor="primary" placeholder="Hello"/>
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
