var movies = [
    {movieName: "interstellar",
    releaseYear: "2014",
    genre: "sci-fi/adventure",
    rating: 8.7},

    {movieName: "inception",
    releaseYear: "2010",
    genre: "sci-fi/drama",
    rating: 8.8},

    {movieName: "the odyssey",
    releaseYear: "2026",
    genre: "epic/adventure",
    rating: 8.4},

    {movieName: "forrest gump",
    releaseYear: "1994",
    genre: "drama/romance",
    rating: 8.8},

    {movieName: "whiplash",
    releaseYear: "2014",
    genre: "drama/music",
    rating: 8.5},

    {movieName: "12 angry men",
    releaseYear: "1957",
    genre: "drama/crime",
    rating: 9.0},

    {movieName: "fury",
    releaseYear: "2014",
    genre: "war/action",
    rating: 7.6}
]
console.table(movies);

var userInput = window.prompt("Enter Movie Name: ").toLowerCase();

    for(index=0; index < movies.length; ){
        if(userInput === movies[index].movieName){
            console.log("Movie found!: " + movies[index].movieName);
            break;
        }
        else{
            index++;
        }
}
if(index === movies.length){
    console.log("Enter a Proper Movie Name!");
}

function movieInfo() {
    var movieInfoInput = window.prompt("Enter movie name to show its info: ").toLowerCase();

    for(index=0; index < movies.length; ){
        if(movieInfoInput === movies[index].movieName){
            console.log("Title: "+ movies[index].movieName);
            console.log("Release Year: "+ movies[index].releaseYear);
            console.log("Genre: "+ movies[index].genre);
            console.log("Rating: "+ movies[index].rating);
            break;
        }
        else {
            index++;
        }
    }
    
    if(index === movies.length) {
        console.log("Enter a Proper Movie Name!");
    }
}
movieInfo();

