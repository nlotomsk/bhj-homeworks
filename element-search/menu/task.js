const menuSub = [...document.querySelectorAll('.menu_sub')];

for (let elem in menuSub) {
    let menuSubActive = menuSub[elem].closest('.menu__item');
  
    let menuSubHref = menuSubActive.querySelector('a');

    menuSubHref.onclick = function(element) {
        
        for (let k in menuSub){
            if (menuSub[k].classList.contains('menu_active')) {
                menuSub[k].classList.remove('menu_active');
                
                if ((menuSub[k].parentNode.querySelector('a').textContent !== element.target.textContent)) {
                    menuSub[elem].classList.add('menu_active');
                    return false;
                }

                if ((menuSub[k].parentNode.querySelector('a').textContent == element.target.textContent)) {
                    return false;
                }
            }   
        }
        menuSub[elem].classList.add('menu_active');
        return false;
         
    }
}
