import { Library } from "./Library.js";
import { BookHistory } from "./BookHistory.js";
import { BookScience } from "./BookScience.js";
import { Member } from "./Member.js";

const library = new Library();

const scienceBook = new BookScience(1, "Fareler ve İnsanlar");
const scienceBook2 = new BookScience(2, "Domain-Driven-Design");
const historyBook = new BookHistory(3, "Nutuk");
const historyBook2 = new BookHistory(4, "Yaban");

library.addBook(historyBook);
library.addBook(scienceBook);

const member1 = new Member(1, "İrem", "Şahinli");
const member2 = new Member(1, "oguz", "Sahin");
library.addMember(member1, member2);

member1.rentABook(scienceBook);
member2.rentABook(historyBook);

member1.listRentedBooks();
member1.returnBook(1);

//!Kütüphane durumunu gösterme:
library.libraryStatus();
