import './index.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Index from './components/Index/Index'
import Obras from './components/Obras/Obras'
import Contacto from './components/Contacto/Contacto'
import ObrasListDetail from './components/ObrasListDetail/ObrasListDetail'
import Servicios from './components/Servicios/Servicios'
import Estudio from './components/Estudio/Estudio'
import WhatsApp from './components/WhatsApp/WhatsApp'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
     <BrowserRouter>
        <div>
            <Header/>
              <main>
                  <Routes>
                    <Route path='/' element={<Index />}></Route>
                    <Route path='/obras' element={<Obras />}></Route>
                    <Route path='/obras/:idYear' element={<Obras />}></Route>
                    <Route path='/servicios' element={<Servicios />}></Route>
                    <Route path='/estudio' element={<Estudio />}></Route>
                    <Route path='/contacto' element={<Contacto />}></Route>
                    <Route path='/obra/:idCategory' element={<ObrasListDetail/>}></Route>
                  </Routes>
              </main>
              <WhatsApp />
              <Footer />
        </div>
      </BrowserRouter>
      
    
  )
}

export default App
