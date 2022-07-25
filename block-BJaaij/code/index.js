class BookList{
    constructor() {
        this.BookList = [];
        this.currentIndex = 0;
    }
    add(BookList = []) {
        this.BookList = this.BookList.concat(BookList);
        return this.BookList;
    }
    getCurrentBook() {
        return this.BookList[this.currentIndex];
    }
    getNextBook() {
        return this.BookList[this.currentIndex + 1];
    }
    getPrevBook() {
        return this.BookList[this.currentIndex - 1];
    }
    changeCurrentBook(index) {
        this.currentIndex = index;
    }
}

class Book{
    constructor(title, category, author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
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
bookList.add([book1, book2, book3, book4, book5]);
console.log(bookList.getCurrentBook());
console.log(bookList.getNextBook());
console.log(bookList.getPrevBook());
console.log(bookList.changeCurrentBook());