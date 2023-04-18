const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItem = document.querySelectorAll('.dropdown__item');

dropDownValue.addEventListener('click', (ev) => {
    ev.preventDefault();
    dropDownList.classList.add('dropdown__list_active');
});



dropDownItem.forEach (button => {
    button.addEventListener('click', (ev2) => {
        ev2.preventDefault();
        dropDownValue.textContent = button.textContent;
        console.log(button.textContent);
        dropDownList.classList.remove('dropdown__list_active');
    })
})
