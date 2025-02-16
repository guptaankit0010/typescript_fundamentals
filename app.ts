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
        return movieArr.filter(movie => {
            return movie.author == author
        }).map(movie => movie.title)

    }
    else {
        return movieArr.filter(movie => {
            return movie.author == author
        }).map(movie => movie.title)
    }
    // return [""];
}

let title1: string[] = GetTitles("ankit 4");
console.log(title1[0])

// Function types

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => {
    return `${name}_${id}`;
}



// Interface
interface Movie {
    "title": string,
    "author": string,
    "status": boolean,
    "releaseYear"?: number,
    "logReview"?: (review: string) => void
}


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


// Interface for function types

interface ReviewLogger {
    (review: string): void
}

interface Movie2 {
    title: string,
    author: string,
    status: boolean,
    releaseYear?: number,
    logReview2?: ReviewLogger
}


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


// Extending interfaces

interface Movie3 {
    title: string,
    director: string
}

interface MovieReview extends Movie3 {
    review: number,
    logReview: LogReview
}

interface LogReview {
    (review: string): void
}

const review1: MovieReview = {
    title: "interface movvie 1",
    director: "ankit",
    review: 5,
    logReview: (review: string) => {
        console.log(review)
    }

}




// Classes

class Video {
    // private title: string = '';
    // year: number = 2024;

    // constructor(title: string, year: number) {
    //     console.log('creating a new video')
    //     this.title = title;
    //     this.year = year;
    // }

    private _producer = '';

    get producer(): string {
        return this._producer.toUpperCase();
    }

    set producer(name: string) {
        this._producer = name;
    }

    constructor(protected title: string, public year: number) {
        console.log('creating a new video')
        // this.title = title;
        // this.year = year;
    }

    printItem(): void {
        console.log(`${this.title} released in ${this.year}`)
    }
}


class Documentary extends Video {
    constructor(title: string, year: number, public subject: string) {
        super(title, year)
    }

    printItem(): void {
        super.printItem();
        console.log(`${this.title} released in ${this.year}`)
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


// abstract class

abstract class VideoAB {
    // private title: string = '';
    // year: number = 2024;

    // constructor(title: string, year: number) {
    //     console.log('creating a new video')
    //     this.title = title;
    //     this.year = year;
    // }

    private _producer = '';

    get producer(): string {
        return this._producer.toUpperCase();
    }

    set producer(name: string) {
        this._producer = name;
    }

    constructor(protected title: string, public year: number) {
        console.log('creating a new video')
        // this.title = title;
        // this.year = year;
    }

    printItem(): void {
        console.log(`${this.title} released in ${this.year}`)
    }
    abstract printProducer(): void;
}

class Documentary1 extends VideoAB {
    constructor(title: string, year: number, public subject: string) {
        super(title, year)
    }

    printProducer(): void {
        console.log(this.producer)
    }
}

let doc2: VideoAB = new Documentary1("abstract vid 1", 8976, "abstract subject")
doc2.producer = "abstract producer";
doc2.printProducer()