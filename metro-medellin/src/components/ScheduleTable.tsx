import React from 'react'
import type { Schedule } from '../types.ts'

export type ScheduleTableProps = {
  schedules: Schedule[]
}

// Tabla de horarios por línea y día
export const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedules }) => {
  return (
    <table className="table" role="table" aria-label="Tabla de horarios">
      <thead>
        <tr>
          <th>Línea</th>
          <th>Día</th>
          <th>Apertura</th>
          <th>Cierre</th>
          <th>Frecuencia pico</th>
          <th>Frecuencia valle</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((s) => (
          <tr key={`${s.line}-${s.day}`}>
            <td>{s.line}</td>
            <td>{s.day}</td>
            <td>{s.open}</td>
            <td>{s.close}</td>
            <td>{s.peak}</td>
            <td>{s.offpeak}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
