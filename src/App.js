import './App.css'
import MovieList from './components/MovieList'
import data from './data.json'

const App = () => {
  return (
    <div clasName="App">
      <header className="App-header">
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <MovieList movieData={data.movieData} />
      </main>
    </div>
  )
}

export default App
