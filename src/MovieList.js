import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieService from './MovieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    MovieService.getMovies(page)
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => {
        console.error('Error loading movies:', error);
      });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.poster} alt="Movie Poster" style={{ width: '100%' }} />
            <h2>{movie.name}</h2>
            <p>{movie.year}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MovieList;
