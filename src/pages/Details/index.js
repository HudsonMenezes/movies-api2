import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import APIKey from '../../config/key'
import { Container } from './styles'

function Details() {
  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500'

  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date
        }

        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>
            <strong>Sinopse:</strong> {movie.sinopse}
          </span>
          <span className="release-date">
            <strong>Data de Lançamento:</strong> {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Voltar à Página Inicial</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details
