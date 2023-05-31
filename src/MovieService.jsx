const MovieService = {
    getMovies: (page) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const movies = [];
          const startIndex = (page - 1) * 8;
          for (let i = startIndex; i < startIndex + 8; i++) {
            movies.push({
              id: i + 1,
              name: `Movie ${i + 1}`,
              year: 2023,
              poster: `https://source.unsplash.com/random/?bollywoodmovies&${i + 1}`,
            });
          }
          resolve(movies);
        }, 500);
      });
    },
  };
  
  export default MovieService;
  