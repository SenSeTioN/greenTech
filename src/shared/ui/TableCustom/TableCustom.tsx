import { ScrollArea, Table } from '@mantine/core'
import { FC, ReactElement, useState } from 'react'
import styles from './TableCustom.module.scss'

type TTableProps = {
  rows: ReactElement[]
  columns: ReactElement[]
}

export const TableCustom: FC<TTableProps> = ({ rows, columns }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrolled, setScrolled] = useState(false)

  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table
        withRowBorders={false}
        highlightOnHover
        highlightOnHoverColor='rgba(0, 0, 0, 0.3)'
        className={styles['table']}>
        <Table.Thead className={styles['table-head']}>
          <Table.Tr>{columns}</Table.Tr>
        </Table.Thead>
        <Table.Tbody className={styles['table-body']}>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  )
}
