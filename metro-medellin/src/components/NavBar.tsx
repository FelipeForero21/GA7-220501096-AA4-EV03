import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Barra de navegación superior con enlaces a las secciones principales
export const NavBar: React.FC = () => {
  return (
    <header className="navbar" role="navigation" aria-label="Barra de navegación">
      <div className="nav-content">
        <Link to="/" className="brand" aria-label="Inicio Metro de Medellín">
          Metro de Medellín
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/mapa" className={({ isActive }) => (isActive ? 'active' : '')}>
                Mapa
              </NavLink>
            </li>
            <li>
              <NavLink to="/estaciones" className={({ isActive }) => (isActive ? 'active' : '')}>
                Estaciones
              </NavLink>
            </li>
            <li>
              <NavLink to="/horarios" className={({ isActive }) => (isActive ? 'active' : '')}>
                Horarios
              </NavLink>
            </li>
            <li>
              <NavLink to="/tarifas" className={({ isActive }) => (isActive ? 'active' : '')}>
                Tarifas
              </NavLink>
            </li>
            <li>
              <NavLink to="/noticias" className={({ isActive }) => (isActive ? 'active' : '')}>
                Noticias
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
