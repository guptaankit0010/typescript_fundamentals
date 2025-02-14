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

// function overloads in TS
const movieArr = [
    {
        "title": "movie 1", "author": "ankit 1", "status": true
    },
    {
        "title": "movie 1", "author": "ankit 2", "status": false
    },
    {
        "title": "movie 1", "author": "ankit 3", "status": true
    },
    {
        "title": "movie 1", "author": "ankit 4", "status": false
    }
]
function GetTitles(author: string): string[];
function GetTitles(author: string, status: boolean): string[];

function GetTitles(author: string, status?: boolean) {
    if (status !== undefined) {
        return movieArr.filter(movie => movie.status == status)
    }
    else {
        return movieArr.filter(movie => movie.author == author)
    }
    // return [""];
}
