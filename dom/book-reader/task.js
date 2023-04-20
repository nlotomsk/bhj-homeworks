const controlBook = document.querySelector('.book__control');
const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size');

for (let elem of controlBook.children) {
    elem.addEventListener('click', function(ev){
        if (ev.target.dataset.size === 'big') {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else if (ev.target.dataset.size === 'small') {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
        for (let text of fontSize) {
            text.classList.remove('font-size_active');
        }
        ev.target.classList.add('font-size_active');
        ev.preventDefault();
    })
}
