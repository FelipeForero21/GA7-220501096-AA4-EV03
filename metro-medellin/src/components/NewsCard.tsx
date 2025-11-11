import React from 'react'
import type { NewsItem } from '../types.ts'

export type NewsCardProps = {
  item: NewsItem
}

// Tarjeta de noticia/aviso
export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <article className="card" aria-labelledby={`news-${item.id}`}>
      <h3 id={`news-${item.id}`}>{item.title}</h3>
      <p className="muted">{new Date(item.date).toLocaleDateString()}</p>
      <p>{item.summary}</p>
      {item.link && (
        <p>
          <a href={item.link} target="_blank" rel="noreferrer">
            Ver más
          </a>
        </p>
      )}
    </article>
  )
}
