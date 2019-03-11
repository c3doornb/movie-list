import Movie from './movie.js';

var MovieList = ({movies}) => ( 
  <div className="movie-list">
    {movies.map(movie => <Movie movie={movie.title} />)}
    {movies.length ? '' : <p>No movies found by that name.</p>}
  </div> 
);

export default MovieList