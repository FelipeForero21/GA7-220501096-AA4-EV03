import type { Schedule } from '../types.ts'

// Mocks de horarios por línea y día
export const schedulesMock: Schedule[] = [
  { line: 'A', day: 'Laboral', open: '4:30', close: '23:00', peak: '4-6 min', offpeak: '8-10 min' },
  { line: 'A', day: 'Sábado', open: '5:00', close: '22:30', peak: '5-7 min', offpeak: '10-12 min' },
  { line: 'A', day: 'Domingo/Festivo', open: '5:30', close: '22:00', peak: '7-9 min', offpeak: '12-15 min' },
]
