import React from 'react'
import { ScheduleTable } from '../components/ScheduleTable'
import { schedulesMock } from '../services/schedules'

// Página de horarios: muestra tabla de frecuencias y horas de operación
export const Schedules: React.FC = () => {
  return (
    <section className="container">
      <h1>Horarios</h1>
      <p className="muted">Consulta los horarios de operación y las frecuencias por línea.</p>
      <ScheduleTable schedules={schedulesMock} />
    </section>
  )
}
