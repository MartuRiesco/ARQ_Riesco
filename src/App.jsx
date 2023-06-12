import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Index from './components/Index/Index'
import Obras from './components/Obras/Obras'
function App() {
  
  return (
     <BrowserRouter>
    <div className='app'>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path="/obras" element={<Obras/>}></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
      
    
  )
}

export default App
