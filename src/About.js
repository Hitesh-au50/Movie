import React from 'react';
import './About.css'; // Import the CSS file for the component

const About = () => {
  const movies = [
    { id: 1, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont' },
    { id: 2, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola' },
    { id: 3, title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino' },
    { id: 4, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan' },
    { id: 5, title: 'Fight Club', year: 1999, director: 'David Fincher' },
  ];

  return (
    <div className="about-container"> {/* Apply a CSS class to the container */}
      <h1>About</h1>
      <p>
        Welcome to our website! We are passionate about movies and are dedicated to providing you with information about
        some of the greatest films ever made.
      </p>
      <h2>Featured Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year}) - Directed by {movie.director}
          </li>
        ))}
      </ul>
      <p>
        In our collection, you will find a diverse range of movies from different genres and time periods. Whether you
        are a fan of drama, crime, action, or suspense, we've got something for you. Explore our website to discover more
        about these fantastic films and their talented creators.
      </p>
    </div>
  );
};

export default About;
