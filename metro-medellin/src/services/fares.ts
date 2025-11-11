// Mock sencillo de tarifas
export type Fare = {
  category: string
  value: number
}

export const faresMock: Fare[] = [
  { category: 'Adulto', value: 3000 },
  { category: 'Estudiante', value: 2400 },
  { category: 'Adulto mayor', value: 2000 },
]
