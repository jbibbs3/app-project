

class MovieList {

    constructor(name, lists = []) {
        this.name = name;
        this.lists = lists;
    }

    intakeMovie(intake) {

        this.lists.push(intake);

        return this.lists
    }

    pushOutMovie(deflate) {
        
        this.lists.splice(deflate);
        return this.lists
    }

}


export default MovieList