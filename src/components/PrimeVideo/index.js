// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-video-logo"
      />
      <div className="movies-container">
        <h1 className="category-heading">Action Movies</h1>
        <MovieSlider movieList={actionMoviesList} />
        <h1 className="category-heading">Comedy Movies</h1>
        <MovieSlider movieList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
