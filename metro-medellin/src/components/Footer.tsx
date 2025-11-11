import React from 'react'

// Pie de página con enlaces de interés
export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Metro de Medellín</p>
        <ul className="footer-links">
          <li>
            <a href="#" aria-label="Facebook">Facebook</a>
          </li>
          <li>
            <a href="#" aria-label="X/Twitter">X</a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
