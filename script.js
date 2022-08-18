const newBookButton = document.getElementById('new-book-button');
const newBookModal = document.getElementById('new-book-modal');
const newBookModalClose = document.getElementsByClassName('new-book-button-close')[0];
const newBookForm = document.getElementById('new-book');

newBookButton.addEventListener('click', toggleNewBookForm);
newBookModalClose.addEventListener('click', toggleNewBookForm);

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = newBookForm.elements['name'].value;
  const author = newBookForm.elements['author'].value;
  const pages = newBookForm.elements['pages'].value;
  const read = newBookForm.elements['read'].value;

  addBookToLibrary(name, author, pages, read);
  resetNewBookForm();
  toggleNewBookForm();
  displayBooks();
});

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary(name, author, pages, read) {
  myLibrary.push(new Book(name, author, pages, read));
}

function deleteBookFromLibrary() {

}

function resetNewBookForm() {
  newBookForm.reset();
}

function displayBooks() {
  for (let book in myLibrary) {

  }
}


function toggleNewBookForm() {
  newBookModal.classList.toggle('hidden');
}