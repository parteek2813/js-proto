// const coding = ["js", "css", "javascript", "python", "xml"];

// const values = coding.forEach((item) => {
// //   console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums = myNums.filter((num) => {
//   return num > 4;
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishDate: "April 10, 1925",
    editionYear: 2020,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishDate: "July 11, 1960",
    editionYear: 2019,
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishDate: "June 8, 1949",
    editionYear: 2018,
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishDate: "September 21, 1937",
    editionYear: 2021,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishDate: "June 26, 1997",
    editionYear: 2022,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishDate: "January 28, 1813",
    editionYear: 2017,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age",
    publishDate: "July 16, 1951",
    editionYear: 2019,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    publishDate: "July 29, 1954",
    editionYear: 2020,
  },
  {
    title: "The Hunger Games",
    genre: "Dystopian",
    publishDate: "September 14, 2008",
    editionYear: 2016,
  },
  {
    title: "To Kill a Kingdom",
    genre: "Fantasy",
    publishDate: "March 6, 2018",
    editionYear: 2023,
  },
];

const userBooks = books.filter((bk) => bk.genre === "Fantasy");

console.log(userBooks);
