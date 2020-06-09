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
let removeButton = document.querySelector('#removeBooks')
let displayBooks = document.querySelector("#displayBooks")


showForm.addEventListener("click", toggleForm);
addBookButton.addEventListener("click", addBookToLibrary);
removeButton.addEventListener("click", toggleDelete)


function toggleDelete(){
    document.querySelectorAll(".deleteButton").forEach((element) => {
        element.classList.toggle("deleteButton")
    })
}


function toggleForm(){
    addBookForm.classList.toggle("hideForm")
}

function addBookToDisplay(author, title, pages, read) {
    const newCard = document.createElement('div')
    newCard.classList.add('bookCard')

    const top = document.createElement('div')
    top.classList.add('topBook')

    const theTitle = document.createElement('span')
    theTitle.classList.add('title')
    theTitle.textContent = title
    top.appendChild(theTitle)

    const bottom = document.createElement('div')
    bottom.classList.add('bottomBook')

    const theAuthor = document.createElement('span')
    theAuthor.classList.add('author')
    theAuthor.textContent = author
    bottom.appendChild(theAuthor)

    const numPages = document.createElement('span')
    numPages.classList.add('author')
    numPages.textContent = `:${pages} pages`
    bottom.appendChild(numPages)

    newCard.appendChild(top)
    newCard.appendChild(bottom)

    displayBooks.appendChild(newCard)
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
        addBookToDisplay(author, title, pages, read)
        clearInputs()
        toggleForm()
        console.log(myLibrary)
        
    }
    else {
        alert("input invalid!")
    }
}  


function render() {
    displayBooks.innerHTML = "";
    index = 0

	for (elem in myLibrary) {
		displayBooks.innerHTML += '<div class = "bookCard">'+
                                '<div class = "topBook">'+
                                    '<span class="title">' + myLibrary[elem].title + '</span>'+                        
                                '</div>'+
                                '<div class = "bottomBook">'+
                                    '<span class="author">' + myLibrary[elem].author + ": " + '</span>'+
                                    '<span class="author">' + myLibrary[elem].numPages + " pages" + '</span>'+
                                    '<button class = "deleteButton">' + "Delete" + '</button>'+
                                '</div>'+
                            '</div>';
		index++;
	}
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



function main() {
    myLibrary.push(new Book("Arthur Conan Doyle", "Sherlock Holmes", 400, true))
    myLibrary.push(new Book("JK Rowling", "Harry Potter", 870, true))
    render();
}


main()