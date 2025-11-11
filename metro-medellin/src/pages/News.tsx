import React from 'react'
import { newsMock } from '../services/news'
import { NewsCard } from '../components/NewsCard'

// Página de noticias/avisos del Metro
export const News: React.FC = () => {
  return (
    <section className="container">
      <h1>Noticias y avisos</h1>
      <p className="muted">Comunicados, mantenimientos y cambios de servicio.</p>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {newsMock.map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </div>
    </section>
  )
}
