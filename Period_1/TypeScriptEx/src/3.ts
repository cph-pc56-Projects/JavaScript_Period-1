interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

function showInfo(book: IBook) {
    return `Title: ${book.title} Author: ${book.author} Published: ${book.published} Pages: ${book.pages}`
}

let b: IBook = {
    title: "CyberPunk",
    author: "Tim",
    // published: new Date(),
    // pages: 12
}

console.log(b);

/// Duck-typing or structural typing is that type-checking focuses on the shape that values have.

class Book implements IBook {
    title =  "New Frontiers";
    author =  "A guy";
    published = new Date();
    pages = 102;

    get getTitle() {
        return this.title;
    }

    get getAuthor() {
        return this.author;
    }

    get getPublishedDate() {
        return this.published;
    }

    get getPages() {
        return this.pages;
    }

    
}