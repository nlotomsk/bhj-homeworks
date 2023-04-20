const blokReveal = document.querySelectorAll('.reveal')
const heightBrouser = document.documentElement.clientHeight;

window.addEventListener('scroll', function(e){
    for (let index = 0; index < blokReveal.length; index++) {

        if (blokReveal[index].getBoundingClientRect().bottom < 0){
            blokReveal[index].classList.remove('reveal_active')
        } else if (blokReveal[index].getBoundingClientRect().top < heightBrouser) {
            blokReveal[index].classList.add('reveal_active')
        } else {
            blokReveal[index].classList.remove('reveal_active')
        }

    }
})