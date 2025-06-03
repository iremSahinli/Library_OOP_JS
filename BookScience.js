import { Book } from "./Book.js";

export class BookScience extends Book {
  constructor(id, name, author) {
    super(id, name, author, "Science");
  }
}

//! constructor yapı içerisinde type(tür) için sabit olan 'Science' kullanıldı.
