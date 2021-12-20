import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import { MoviesProvider } from './hooks/useMovies'

import './styles/global.scss'

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  )
}
