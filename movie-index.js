

import MovieList from './movie-list.js';
import Movie from './movies.js';

let IT = new Movie("IT", "Horror", "R", "2019" );
let Gladiator = new Movie("Gladiator", "Drama", "PG-13", "2000");
let Life = new Movie("Life", "Comedy", "R", "2002");

let featureFilms = new MovieList('featureFilms');
featureFilms.intakeMovie(Gladiator);
featureFilms.intakeMovie(Life);
featureFilms.intakeMovie(IT);

featureFilms.pushOutMovie(IT);

console.log(featureFilms);


