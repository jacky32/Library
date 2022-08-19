const newBookButton = document.getElementById('new-book-button');
const newBookModal = document.getElementById('new-book-modal');
const newBookModalClose = document.getElementsByClassName('new-book-button-close')[0];
const newBookForm = document.getElementById('new-book');
const mainContent = document.getElementById('main-content');
const checkBox = document.getElementById('read');

newBookButton.addEventListener('click', toggleNewBookForm);
newBookModalClose.addEventListener('click', toggleNewBookForm);

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = newBookForm.elements['name'].value;
  const author = newBookForm.elements['author'].value;
  const pages = newBookForm.elements['pages'].value;
  const read = checkBox.checked;

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

function resetNewBookForm() {
  newBookForm.reset();
}

function displayBooks() {
  mainContent.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    if (book.read == true) {
      mainContent.insertAdjacentHTML('afterbegin', `<div class='book read' id='${i}'><div class='book-name'>${book.name} </div><div class='book-author'>${book.author}</div><div class='book-pages'>${book.pages} pages</div><button class='book-button-read'>Read?</button><button class='book-button-delete'>X</button></></div>`);
    } else {
      mainContent.insertAdjacentHTML('afterbegin', `<div class='book' id='${i}'><div class='book-name'>${book.name} </div><div class='book-author'>${book.author}</div><div class='book-pages'>${book.pages} pages</div><button class='book-button-read'>Read?</button><button class='book-button-delete'>X</button></></div>`);
    }
  }

  const deleteButtons = document.getElementsByClassName('book-button-delete');
  for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', (e) => {
      document.getElementById(i).remove();
      myLibrary.splice(i, 1);
      displayBooks();
    });
  }
}

function toggleNewBookForm() {
  newBookModal.classList.toggle('hidden');
}