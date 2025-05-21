import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wich", release_date: "2024" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1998" },
    { id: 4, title: "Iron Man", release_date: "2001" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);

    setSearchQuery("......."); // change the state after alert in form of dots...
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}

        {/*{movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )} */}
        {/* this is how we can search the movie by just type the letter and we will do the same using API. */}
      </div>
    </div>
  );
}

export default Home;
