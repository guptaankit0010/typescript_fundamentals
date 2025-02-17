
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

export { Video, VideoAB, Documentary, Documentary1 }