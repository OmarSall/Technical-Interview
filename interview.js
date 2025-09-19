/*
1. Write a function that takes the books array as an argument
and returns a new array of only the books with the genre "Fantasy".
*/

/*
2. Write a function that takes the books array as an argument
and returns the total number of pages of all books.
*/

/*
3. Write a function that takes the books array as an argument
and returns an object with the following format:
{
  'J.R.R. Tolkien': [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      pages: 310,
    },
    {
      title: 'The Silmarillion',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      pages: 365,
    }
  ],
  'J.K. Rowling': [
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
  ]
  // ...
}
*/

/* Ex 1 */

const getGenreFantasy = booksArray => {
    return booksArray.filter(book => book.genre === 'Fantasy');
};

/* Ex 2 */

const getTotalNumberOfPages = booksArray => {
    return booksArray.reduce((sum, book) => sum + book.pages, 0);
};

/* Ex 3 */
const user = {};
user['age'] = 12;

const key = 'name';
user[key] = 'Maciej';

// const getAuthorsDictionary = booksArray => {
//     const authorsWithBooks = {};
//
//     booksArray.forEach(book => {
//         const author = book.author;
//         const booksForCurrentAuthor = authorsWithBooks[author];
//
//         // authorsWithBooks[author] = booksForCurrentAuthor ? [...authorsWithBooks[author], book] : [book];
//
//         if (booksForCurrentAuthor) {
//             authorsWithBooks[author].push(book)
//         } else {
//             authorsWithBooks[author] = [];
//             authorsWithBooks[author].push(book);
//         }
//     });
//     return authorsWithBooks;
// };

// solution with reduce
// const getAuthorsDictionary = (booksArray) => {
//     return booksArray.reduce((authorsDict, book) => {
//         const {author} = book;
//         authorsDict[author] = authorsDict[author] ? [...authorsDict[author], book] : [book];
//         return authorsDict;
//     }, {});
// }

// solution with map

// const getAuthorsDictionary = booksArray => {
//     const authorsMap = new Map();
//
//     booksArray.forEach(book => {
//         const author = book.author;
//         if (!authorsMap.has(author)) {
//             authorsMap.set(author, [book]);
//         } else {
//             authorsMap.get(author).push(book);
//         }
//     })
//     return authorsMap;
// }

// solution without mutation - for React applications

// const getAuthorsDictionary = (bookArray) => {
//     const authorsMap = new Map();
//
//     bookArray.forEach((book) => {
//         const author = book.author;
//         authorsMap.set(author, [ ...(authorsMap.get(author) || []), book ]);
//     });
//
//     return authorsMap;
// };

// solution with for loop

const getAuthorsDictionary = (booksArray) => {
    const authorsDict = {};
    for (const book of booksArray) {
        const {author} = book;
        if(!(author in authorsDict)) {
            authorsDict[author] = [book]
        } else {
            authorsDict[author].push(book)
        }
    }
    return authorsDict;
}

const getBooksGroupedByAuthor = (booksArray) => {
    return Object.groupBy(booksArray, book => book.author)
}

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

