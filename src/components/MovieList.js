import Movie from './Movie'

const MovieList = ({ movieData }) => {
  // Destructuring It’s a JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their own variables.
  return (
    <div className="movie-list">
      {/* without mapping:  */}
      {/* <Movie movie={movieData[0]} />
      <Movie movie={movieData[1]} />
      <Movie movie={movieData[2]} />
      <Movie movie={movieData[3]} />
      <Movie movie={movieData[4]} />
      <Movie movie={movieData[5]} />
      <Movie movie={movieData[6]} /> */}

      {/* with mapping: */}
      {movieData.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
