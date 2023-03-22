

class MovieList {

    constructor(name, lists = []) {
        this.name = name;
        this.lists = lists;
        
    }

    intakeMovie(intake) {
        this.lists.push(intake);
        return this.lists
    }

    pushOutMovie(movie) {
        var selectedmov = this.lists.indexOf(movie);
        this.lists.splice(selectedmov);
        return this.lists
    }

}




export default MovieList

