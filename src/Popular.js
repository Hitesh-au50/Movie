import React from 'react';
import './Popular.css'; // Import the CSS file for the component

const Popular = () => {
  // Sample popular movies data
  const popularMovies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Dark Knight', year: 2008 },
    { id: 3, title: 'Interstellar', year: 2014 },
    { id: 4, title: 'Avengers: Endgame', year: 2019 },
    { id: 5, title: 'Pulp Fiction', year: 1994 },
  ];

  return (
    <div className="popular-container"> {/* Apply a CSS class to the container */}
      <h1>Popular Movies</h1>
      <p>Check out some of the popular movies that have captivated audiences:</p>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year})
          </li>
        ))}
      </ul>
      <p>
        These movies have gained critical acclaim and have been loved by audiences worldwide. From mind-bending thrillers
        like Inception and Interstellar to iconic superhero films like The Dark Knight and Avengers: Endgame, there's something
        for everyone. Don't miss out on these cinematic masterpieces!
      </p>
    </div>
  );
};

export default Popular;
