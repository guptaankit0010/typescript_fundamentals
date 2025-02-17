import { Movie, Movie2, Movie3, MovieReview, LogReview } from "./interfaces";
import { Video, VideoAB, Documentary, Documentary1 } from "./classes";
import { GetTitles } from "./functions";

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






let title1: string[] = GetTitles("ankit 4");
console.log(title1[0])

// Function types

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => {
    return `${name}_${id}`;
}



// Interface



const movieArrI: Movie[] = [
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

const PrintMovieInfoI = (movie: Movie, cast?: string[]) => {
    console.log(`Title = ${movie.title}`);

    if (movie.releaseYear) {
        console.log(`Release year = ${movie.releaseYear}`)
    }

    if (cast?.length) {
        for (const name of cast) {
            console.log(`cast : ${name}`)
        }
    }

}

const movieI: Movie = {
    "title": "movie I", "author": "ankit I", "status": false,
    "logReview": (review: string): void => { console.log(`Review: ${review}`) }
}

if (movieI.logReview)
    movieI.logReview("Test review")

PrintMovieInfoI(movieI);
const castMembersI = ["henI", "catI"];
PrintMovieInfoI(movieI, castMembersI);




const movieArrI2: Movie2[] = [
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


const movieI2: Movie2 = {
    "title": "movie I", "author": "ankit I", "status": false,
    logReview2: (review: string): void => { console.log(`Review: ${review}`) }
}

if (movieI2.logReview2)
    movieI2.logReview2("test review 2")




const review1: MovieReview = {
    title: "interface movvie 1",
    director: "ankit",
    review: 5,
    logReview: (review: string) => {
        console.log(review)
    }

}







let vid: Video = new Video('calls movie 2', 2034);
// vid.title = "class movie";
vid.printItem()
vid.producer = "ankit";
let prod = vid.producer;
console.log(prod)

let doc: Documentary = new Documentary('calls movie 3', 2134, "test subject");
// vid.title = "class movie";
doc.printItem()
doc.producer = "ankitdoc";
let prodDoc = doc.producer;
console.log(prodDoc)




let doc2: VideoAB = new Documentary1("abstract vid 1", 8976, "abstract subject")
doc2.producer = "abstract producer";
doc2.printProducer()


// Promises

function getMovieByAuthors(author: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authors = GetTitles(author);
            if (authors?.length) {
                resolve(authors)
            }
            else {
                reject("No author found")
            }
        }, 2000)
    })
}

async function logSearchResults() {
    try {
        let results = await getMovieByAuthors("ankit 2a");
        console.log(results)
    } catch (error) {
        console.log(error)        
    }
    

}
console.log("search begin");
logSearchResults()
console.log("search submitted")
