import MovieList from './movieList.js';
import Movie from './movie.js';
import Search from './search.js';
import movieData from '../data/movieData.js';
import AddMovie from './addMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      movies: [],
      addText: '',
    };
  }

  handleTextChange(e) {
    this.setState({
      searchText: e.target.value,
      movies: this.state.movies.filter(movie => movie.title.includes(e.target.value))
    });
  }

  handleAddTextChange(e) {
    this.setState({
      addText: e.target.value
    })
  }

  addMovie() {
    console.log('adding');
    this.state.movies.push({title: this.state.addText});
    this.setState({
      movies: this.state.movies
    })
    console.log(this.state.movies);
  }

  render () {
    return(
      <div>
        <AddMovie addTextChange={this.handleAddTextChange.bind(this)} addMovie={this.addMovie.bind(this)} />
        <Search searchText={this.state.searchText} handleTextChange={this.handleTextChange.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );  
  }
}

export default App;