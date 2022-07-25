class BookList{
    constructor() {
        this.BookList = [];
    }
    add(Book) {
        this.BookList.push(Book);
    }
    getCurrentBook() {
        let currentIndex = this.BookList.findIndex(book => book.isRead == false);
        return this.BookList[currentIndex];
    }
    getNextBook() {
        let currentIndex = this.BookList.findIndex(book => book.isRead == false) + 1;
        return this.BookList[currentIndex];
    }
    getPrevBook() {
        let currentIndex = this.BookList.findIndex(book => book.isRead == false) - 1;
        return this.BookList[currentIndex];
    }
    changeCurrentBook(index) {
        let currentIndex = index;
    }
}

class Book{
    constructor(title, category, author, isRead = false, finishedDate){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}
let book1 = new Book("Lord of the Rings", "novel", "J.R.R. Tolkein");
let book2 = new Book("harry potter", "novel", "J.k. Rowling");
let book3 = new Book("and then there were none", "mystery", "Agatha Christie");
let book4 = new Book("The Lion, the Witch, and the Wardrobe", "novel", "C.S. Lewis");
let book5 = new Book("Pinocchio", "novel", "Carlo Collodi");
book1.markBookAsRead();
book2.markBookAsRead();
let bookList = new BookList();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);
console.log(bookList.getCurrentBook());
console.log(bookList.getNextBook());
console.log(bookList.getPrevBook());
console.log(bookList.changeCurrentBook(4));