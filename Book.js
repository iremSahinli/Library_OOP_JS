import Situation from "./Situation.js";
export class Book {
  constructor(id, name, author, type) {
    if (new.target === Book) {
      throw new Error("Kitap soyut bir sınıftır, doğrudan oluşturulamaz");
    }
    this.id = id;
    this.name = name;
    this.author = author;
    this.type = type;
    this.situation = Situation.CAN_BE_BORRED;
  }

  updateSituation(newSituation) {
    this.situation = newSituation;
  }
}
