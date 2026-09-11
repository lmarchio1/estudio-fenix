import Header from './components/Header'
import Hero from './components/Hero'
import Pilares from './components/Pilares'
import Servicios from './components/Servicios'
import Nosotros from './components/Nosotros'
import Areas from './components/Areas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFlotante from './components/WhatsAppFlotante'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Pilares />
        <Servicios />
        <Nosotros />
        <Areas />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </div>
  )
}

export default App
