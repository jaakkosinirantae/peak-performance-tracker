/*
   Filename: ComplicatedCode.js
   Description: This code demonstrates a sophisticated and elaborate implementation 
                of a virtual library system.
*/

// Define class for books
class Book {
   constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
   }

   displayInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Year: ${this.year}`);
      console.log(`Genre: ${this.genre}`);
   }
}

// Define class for library
class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(title, author, year, genre) {
      const book = new Book(title, author, year, genre);
      this.books.push(book);
      console.log(`New book '${title}' added to the library.`);
   }

   removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index >= 0) {
         const removedBook = this.books.splice(index, 1);
         console.log(`Book '${title}' removed from the library.`);
         return removedBook[0];
      } else {
         console.log(`Book '${title}' not found in the library.`);
         return null;
      }
   }

   listBooks() {
      console.log(`Books in '${this.name}' library:`);
      this.books.forEach(book => book.displayInfo());
   }
}

// Create instance of library
const myLibrary = new Library("My Library");

// Add books to the library
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
myLibrary.addBook("1984", "George Orwell", 1949, "Dystopian");
myLibrary.addBook("Pride and Prejudice", "Jane Austen", 1813, "Romance");

// Remove a book from the library
const removedBook = myLibrary.removeBook("1984");

// Display remaining books in the library
myLibrary.listBooks();

console.log(removedBook);
// Output:
// New book 'The Great Gatsby' added to the library.
// New book 'To Kill a Mockingbird' added to the library.
// New book '1984' added to the library.
// New book 'Pride and Prejudice' added to the library.
// Book '1984' removed from the library.
// Books in 'My Library' library:
// Title: The Great Gatsby
// Author: F. Scott Fitzgerald
// Year: 1925
// Genre: Classic
// Title: To Kill a Mockingbird
// Author: Harper Lee
// Year: 1960
// Genre: Fiction
// Title: Pride and Prejudice
// Author: Jane Austen
// Year: 1813
// Genre: Romance
// { title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' }