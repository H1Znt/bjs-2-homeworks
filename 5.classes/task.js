class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find(book => book[type] === value);
    return result || null;
  }

  giveBookByName(bookName) {
    let book = this.books.find(book => book.name === bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    return book || null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      return 0;
    }
    const marks = this.marks[subject];
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks); // ["химимя", "физика"]
    const averages = subjects.map(subject => this.getAverageBySubject(subject)); // [5, 4.5]
    const sum = averages.reduce((acc, average) => acc + average, 0); // 9.5
    return sum / averages.length || 0; // 9.5 / 2 ->  4.75 
  }
  
}
