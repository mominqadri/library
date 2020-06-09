function Book(author, title, numPages, read = false) {
    this.author = author
    this.title = title
    this.numPages = numPages
    this.read = read
}

let myLibrary = []; // where all the books will be stored
let showForm = document.querySelector(".showForm")
let addBookForm = document.querySelector("#addBook")
let addBookButton = document.querySelector("#addBookButton")

showForm.addEventListener("click", toggleForm);
addBookButton.addEventListener("click", addBookToLibrary);

function toggleForm(){
    addBookForm.classList.toggle("hideForm")
}


function addBookToLibrary() {
    let author = document.querySelector("#bookAuthor").value
    let title = document.querySelector("#bookTitle").value
    let pages = document.querySelector("#bookPages").value
    let read = document.querySelector("#bookStatus").checked

    if ((!isBlank(author)) && (!isBlank(title)) && (!isNaN(pages))){
        if (read = true){
            read = "yes"
        }
        else {
            read = "no"
        }
        myLibrary.push(new Book(author, title, pages, read))
        clearInputs()
        toggleForm()
    }
    else {
        alert("input invalid!")
    }
}  

function render() {
    // array linked to HTML here
    // loops through array and displays each book on the page (w a table or something)

}


function isBlank(str) {
    // return (!str || /^\s*$/.test(str));
    return str === ""
}

function clearInputs(){
    inputs = document.querySelectorAll("input")
    for (elem in inputs){
        inputs[elem].value = ""
    }
    document.querySelector("#bookStatus").checked = false;
}