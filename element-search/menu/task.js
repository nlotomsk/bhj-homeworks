const linkMenu =  document.querySelectorAll('.menu__link');

console.log(linkMenu);

for (let i=0; i < linkMenu.length; i++) {
    let menuList = linkMenu[i].closest('.menu__item').querySelector('ul.menu_sub');
    //console.log(menu);
    if (menuList) {
        menuList[i].addEventListener('click', function (event) {
            //console.log(event);
            event.preventDefault();

            const dropMenuActiv = document.querySelector('.menu_active');
            
            if (menuList.classList.contains('menu_active')) {
                menuList.classList.remove('menu_active');
            } else if (dropMenuActiv) {
                dropMenuActiv.classList.remove('menu_active');
                menuList.classList.add('menu_active');
            } else {
                menuList.classList.add('menu_active');
            }
        })
    }
}
