export class Member {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.rentedBooks = [];
  }

  //!Kitap kiralama işlemi:
  rentABook(book) {
    if (book.situation !== "Can Be Borred") {
      console.log(`${book.name} kitabı şuanda ödünç alınamaz`);
      return;
    }

    book.updateSituation("Borrewed");
    this.rentedBooks.push(book);
    console.log(`${book.name} adlı kitap kiralandı.`);
  }
  //! Kitap iade işlemi:
  returnBook(bookId) {
    const index = this.rentedBooks.findIndex((b) => b.id === bookId);

    if (index === -1) {
      console.log("kitap üyeye ait değil");
      return;
    }

    const book = this.rentedBooks[index];
    book.updateSituation("Can Be Borred");
    this.rentedBooks.splice(index, 1);
    console.log(`${book.name} adlı kitap iade edildi.`);
  }

  //! Kişiye ait kitapların listelenmesi:
  listRentedBooks() {
    if (this.rentedBooks.length === 0) {
      console.log("Bu üye kitap kiralamamış");
      return;
    }

    console.log(
      `${(this.firstName, this.lastName)} adlı üyenin kiraladığı kitaplar:`
    );
    this.rentedBooks.forEach((books) => {
      console.log(`${books.name} (${books.type})`);
    });
  }
}
