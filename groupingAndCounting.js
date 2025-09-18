const books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        pages: 310,
    },
    {
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        pages: 328,
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 309,
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        pages: 281,
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        genre: 'Fantasy',
        pages: 662,
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        genre: 'Dystopian',
        pages: 268,
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 341,
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 435,
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        genre: 'Dystopian',
        pages: 112,
    },
    {
        title: 'The Silmarillion',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        pages: 365,
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        pages: 180,
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 636,
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Fiction',
        pages: 277,
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 766,
    },
    {
        title: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        pages: 423,
    },
    {
        title: 'The Two Towers',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        pages: 352,
    },
    {
        title: 'The Return of the King',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        pages: 416,
    },
    {
        title: 'The Road',
        author: 'Cormac McCarthy',
        genre: 'Dystopian',
        pages: 287,
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        pages: 412,
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 607,
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        pages: 759,
    },
];

// 1. groupByGenre: zgrupuj książki po genre. (Object vs Map of arrays)

// const getBooksByGenre = Object.groupBy(books, book => book.genre);
// console.log(getBooksByGenre);

const getBooksByGenre = (booksArray) => {
    const groupedByGenreDictionary = {};
    booksArray.forEach(book => {
        const {genre} = book;
        if (!groupedByGenreDictionary[genre]) {
            groupedByGenreDictionary[genre] = [book];
        } else {
            groupedByGenreDictionary[genre].push(book);
        }
    })
    return groupedByGenreDictionary;
}
console.log(getBooksByGenre(books));

// 2. countByAuthor: policz ile książek ma każdy author. (licznik)

// const getNumberOfBooksPerAuthor = (booksArray) => {
//     const booksGroupedByAuthor =  Object.groupBy(books, book => book.author);
//     return Object.fromEntries(
//         Object.entries(booksGroupedByAuthor).map(([author, books]) => [author, books.length])
//     )
// }
// console.log(getNumberOfBooksPerAuthor(books))

// const getNumberOfBooksPerAuthor = (booksArray) => {
//     return booksArray.reduce((acc, book) => {
//         const {author} = book;
//         acc[author] = (acc[author] ?? 0) + 1;
//
//         return acc;
//     }, {});
// }
// console.log(getNumberOfBooksPerAuthor(books))

const getNumberOfBooksPerAuthor = (booksArray) => {
    const numberOfBooksPerAuthorDict = {};

    booksArray.forEach((book) => {
        const {author} = book;
        if (numberOfBooksPerAuthorDict[author]) {
            numberOfBooksPerAuthorDict[author]++;
        } else {
            numberOfBooksPerAuthorDict[author] = 1;
        }
    });

    return numberOfBooksPerAuthorDict;
}
console.log(getNumberOfBooksPerAuthor(books))