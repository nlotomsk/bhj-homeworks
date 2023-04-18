const modalSuccess = document.getElementById('modal_success');
const dead = document.getElementById('modal_main');
const showSuccess = document.querySelector('.show-success');
const closeX = document.querySelectorAll('div.modal__close');

dead.classList.add('modal_active');


showSuccess.onclick = () => {
    dead.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

closeX.forEach(element => {
    element.onclick = () => {
        element.closest('.modal').classList.remove('modal_active');
    }
});
