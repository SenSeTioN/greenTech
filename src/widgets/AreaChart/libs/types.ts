export interface IRow {
  id: string
  date: string | string[]
  time: string
  sensorNumber: string
  target: number
  temperature: number
  deviation: number
}

export enum SwitchDate {
  Week = 'week',
  Month = 'month',
  Day = 'day',
}
