

// function overloads in TS
const movieArr = [
    {
        "title": "movie 1", "author": "ankit 1", "status": true
    },
    {
        "title": "movie 2a", "author": "ankit 2", "status": false
    },
    {
        "title": "movie 1", "author": "ankit 3", "status": true
    },
    {
        "title": "movie 1", "author": "ankit 4", "status": false
    }
]

export function GetTitles(author: string): string[];
export function GetTitles(author: string, status: boolean): string[];

export function GetTitles(author: string, status?: boolean) {
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