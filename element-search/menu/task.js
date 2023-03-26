

// const dead = document.getElementById("dead");
// const lost = document.getElementById("lost");

// let shot = 0;
// let miss = 0
 document.onclick = function(event) {
     var target = event.target;
     const nextElem = target.nextElementSibling;
    
     console.log(nextElem);
     //var array = target.className.split(' ');
     //console.log(array);
     if (nextElem !== null) {
        let listElements = document.querySelector(nextElem);

        var classElemArray = nextElem.className.split(' ');
        classElemArray.push('menu_active');
        nextElem.className = classElemArray.join(' ');
        
        // let exclusiveElements = document.querySelectorAll('a');
        // exclusiveElements.closest("href");

        console.log('Проверка');

        // let listElements = document.getElementsByTagName("ul");
        // let firstElement = listElements.item(0);
        // console.log(firstElement.parentElement); // <ul class="exclusive">...</ul>
        // console.log(firstElement.closest("ul")); // <ul class="exclusive">...</ul>
        //console.log(firstElement.closest("*")); 
//     ++shot
//     dead.textContent = shot;
//         if (shot == 5) {
//             reset();
//             alert("Победа");
//         }
    }
//     else if (target.className == 'hole') {
//     ++miss;
//     lost.textContent = miss;
//         if (miss == 10) {
//             reset();
//             alert("Вы проиграли");       
//         }
//     }
//     function reset() {
//         shot=0;
//         miss=0;
//         dead.textContent = shot;
//         lost.textContent = miss; 
//         return;
//     }
}