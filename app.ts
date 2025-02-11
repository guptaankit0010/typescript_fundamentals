function GetRating(title: string): string | number {
    if (title == 'A new hope')
        return 'Calssic';
    return Math.round((Math.random() * 10))
}

function PrintMovieInfo(title: string, releaseYear?: Number, ...cast: string[]) {
    console.log(`Title = ${title}`);

    if (releaseYear) {
        console.log(`Release year = ${releaseYear}`)
    }

    for (const name of cast) {
        console.log(`cast : ${name}`)
    }
}

PrintMovieInfo("movie 1", 1976);
const castMembers = ["hen", "cat"];
PrintMovieInfo("movie 2", 1987, ...castMembers);

let movieName: string = "A new hopsse";

let movieRating: string | number = GetRating(movieName);
console.log(movieRating)