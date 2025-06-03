import { Book } from "./Book.js";

export class BookHistory extends Book {
  constructor(id, name, author) {
    super(id, name, author, "History");
  }
}

//! constructor yapı içerisinde type(tür) için sabit olan 'History' kullanıldı.
