import Situation from "./Situation.js";

export class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }
  //! Kütüphaneye yeni kitap ekleme:
  addBook(book) {
    this.books.push(book);
    console.log(`Yeni eklenen kitap: ${book.name} - Tür: ${book.type}`);
  }

  //! Yeni üye ekleme:
  addMember(member) {
    this.members.push(member);
    console.log(`Eklenen üye: ${member.firstName} ${member.lastName}`);
  }
  //! Kitap durum güncellemesi:
  updateBooksSituation(bookId, newSituation) {
    const book = this.books.find((k) => k.id === bookId);
    if (!book) {
      console.log("Kitap bulunamadı");
      return;
    }
    book.updateSituation(newSituation);
    console.log(`Kitap durumu güncellendi: kitap ${newSituation}`);
  }

  //!Tüm kitapların listesi:
  allBookList() {
    console.log("Tüm kitaplar:");
    this.books.forEach((book) => {
      console.log(`${book.name} - (${book.type} - ${book.situation})`);
    });
  }

  //! Kiralanan tüm kitapların listesi:
  allBarrowedBooks() {
    const barrowedBooks = this.books.filter(
      (b) => b.situation === Situation.BORREWED
    );
    console.log("Kiralanmış kitaplar:");
    if (barrowedBooks.length === 0) {
      console.log("Kiralanan kitap yok");
      return;
    }

    barrowedBooks.forEach((k) => {
      console.log(`${k.name} (${k.type})`);
    });
  }
  //! Üye listesi:
  allMemberList() {
    console.log("Üyeler:");
    this.members.forEach((m) => {
      console.log(`- ${m.firstName} ${m.lastName}`);
    });
  }

  //!Kütüphane durumu:
  libraryStatus() {
    console.log("Kütüphane durumu:");
    this.allBookList();
    this.allMemberList();
    this.allBarrowedBooks();
  }
}
