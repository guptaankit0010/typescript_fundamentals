interface Movie {
    "title": string,
    "author": string,
    "status": boolean,
    "releaseYear"?: number,
    "logReview"?: (review: string) => void
}

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
export { Movie, Movie2, Movie3, MovieReview, LogReview }