import React, { useContext } from 'react'
import '../styles/sidebar.scss';

interface GenresProps {
  genres: [
    {
      id: number
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
      title: string
    }
  ]
}

function SideBar(props: GenresProps) {

  const genreContext = useContext(GenreContext)

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
    </div>

  </nav>)

export default SideBar
