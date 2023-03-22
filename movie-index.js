

import MovieList from './movie-list.js';
import Movie from './movies.js';

let IT = new Movie("IT", "Horror", "R", "2019" );
let Gladiator = new Movie("Gladiator", "Drama", "PG-13", "2000");
let Life = new Movie("Life", "Comedy", "R", "2002");
let Juice = new Movie("Juice", "Drama", "R", '1992');
let Boomerang = new Movie("Boomerang", "Comedy", "R", "1992");
let Rocky4 = new Movie("Rocky 4", "Drama", "PG", "1985" );



let featureFilms = new MovieList('featureFilms');
featureFilms.intakeMovie(Gladiator);
featureFilms.intakeMovie(Life);
featureFilms.intakeMovie(IT);
featureFilms.intakeMovie(Juice);
featureFilms.intakeMovie(Boomerang);
featureFilms.intakeMovie(Rocky4);

featureFilms.pushOutMovie(IT);

console.log(featureFilms);


