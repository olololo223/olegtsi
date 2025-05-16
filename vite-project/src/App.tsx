import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import Footer from './components/Footer';
import Blog from './pages/Blog';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { AddingProduct } from './components/AddingProduct';
import Message from './pages/Message';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <>
    <Header/>
    <Button size="medium" color="primary" title="Принять" onClick={()=>alert("hello")}/>
    <Text size="large" color="primary" align="center" title="Hello, world!"/>
    <Input size="large" borderColor="primary" placeholder="Hello"/>
    <AddingProduct/>
    <Text size='large' color='primary' align='center' title='ДАННЫЕ СЕРВЕРА(GET-ЗАПРОС) В /message'/>
    <a className='text-lg text-blue-500 text-center' href='/message'>Ссылка на /message</a>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
