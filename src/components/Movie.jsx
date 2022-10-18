const Movie = ({ movie }) => {
  return (
    <div className="movie-card" id={movie.color}>
      <h3>{movie.title}</h3>
      <h5>
        Runtime: {movie.hours}:{movie.minutes}
      </h5>
      <a href={movie.link}>
        <img src={movie.poster} alt="poster" />
      </a>
    </div>
  )
}

export default Movie
