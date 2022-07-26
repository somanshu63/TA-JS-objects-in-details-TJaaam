
class BookList{
    constructor(root, list = []) {
        this.books = list;
        this.root = root;
    }
    add(title, author, ISBN) {
        let book = new Book(title, author, ISBN);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(ISBN){
        let index = this.books.findIndex((book) => book.ISBN == ISBN);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach((book) => {
            let ui = book.createUI();
            ui.querySelector(".cross").addEventListener(
                "click",
                this.handleDelete.bind(this, book.ISBN)
            );
            this.root.append(ui);
        });
    }
}

class Book{
    constructor(title, author, ISBN){
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
        this.createUI();
    }
    createUI() {
        let tr = document.createElement("tr");
        let bookName = document.createElement("td");
        bookName.innerText = this.title;
        let bookAuthor = document.createElement("td");
        bookAuthor.innerText = this.author;
        let bookISBN = document.createElement("td");
        bookISBN.innerText = this.ISBN;
        let cross = document.createElement("td");
        cross.classList.add("cross");
        cross.innerText = "X";
        tr.append(bookName, bookAuthor, bookISBN, cross);
        return tr;
    }
}

let form = document.querySelector("form");
let myBooks = new BookList(document.querySelector("table"));
form.addEventListener("submit", (event) => {
    event.preventDefault();
    myBooks.add(title.value, author.value, ISBN.value);
    title.value = "";
    author.value = "";
    ISBN.value = "";
});