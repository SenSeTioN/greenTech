import { TableCustom } from '@/shared'
import { IRow } from '@/widgets/AreaChart/libs/types'
import { Table } from '@mantine/core'
import { FC } from 'react'
import { column } from './lib/constants'

type TTableProps = {
  data: IRow[]
}

export const TableTemp: FC<TTableProps> = ({ data }) => {
  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.date}</Table.Td>
      <Table.Td>{item.time}</Table.Td>
      <Table.Td>{item.sensorNumber}</Table.Td>
      <Table.Td>{`${item.target} °C`}</Table.Td>
      <Table.Td>{`${item.temperature} °C`}</Table.Td>
      <Table.Td>{`${item.deviation} °C`}</Table.Td>
    </Table.Tr>
  ))

  const columns = column.map((item) => <Table.Th key={item.id}>{item.title}</Table.Th>)

  return <TableCustom columns={columns} rows={rows} />
}
