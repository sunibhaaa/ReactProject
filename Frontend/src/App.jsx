
import "./App.css";
import MovieCard from "./components/MovieCard"
function App() { 

  return (
    <>
    <MovieCard movie={{title: "Sunibha Movie", release_date: "2026"}} />
    <MovieCard movie={{title: "Nikita Movie", release_date: "2025"}} />
    </>
  );

  
}

export default App
