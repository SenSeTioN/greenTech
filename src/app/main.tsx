import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '../shared/styles/global.scss'
import { appRouter } from './routes/appRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <RouterProvider router={appRouter()} />
  </MantineProvider>
)
