//Part a

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Part b
class Movie1 {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
// Part c
   static  getPG(movies) {
        const pgMovies = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].rating === "PG") {
                pgMovies.push(movies[i]);
            }
        }
        return pgMovies;
    }
}

// Part d
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");




