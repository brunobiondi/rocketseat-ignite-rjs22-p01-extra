import React, { useEffect, useState } from 'react'
import Content from './components/Content'
import SideBar from './components/SideBar'

import { api } from './services/api'

import './styles/global.scss'

const GenreContext = React.createContext({})

interface GenreResponse {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function App() {
  const [genres, setGenres] = useState<GenreResponse[]>([])
  const [currentGenre, setCurrentGenre] = useState<GenreResponse>({
    id: 0,
    name: 'action',
    title: 'none',
  })

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then((response) => {
      setGenres(response.data)
      setCurrentGenre(response.data[0])
    })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreContext.Provider value={currentGenre}>
        <SideBar genres={genres} />
        <Content />
      </GenreContext.Provider>
    </div>
  )
}
