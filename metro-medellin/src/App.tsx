import React from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

// Componente principal de Layout que renderiza la navegación, el contenido y el pie de página
const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="container" role="main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
