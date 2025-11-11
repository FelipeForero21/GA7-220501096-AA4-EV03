import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MapPage } from '../pages/Map'
import { Stations } from '../pages/Stations'
import { Schedules } from '../pages/Schedules'
import { Fares } from '../pages/Fares'
import { News } from '../pages/News'

// Definición de rutas principales de la aplicación
export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/mapa" element={<MapPage />} />
    <Route path="/estaciones" element={<Stations />} />
    <Route path="/horarios" element={<Schedules />} />
    <Route path="/tarifas" element={<Fares />} />
    <Route path="/noticias" element={<News />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)
