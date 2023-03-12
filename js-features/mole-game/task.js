const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let shot = 0;
let miss = 0
document.onclick = function(event) {
    var target = event.target 
    if (target.className == 'hole hole_has-mole') {
    ++shot
    dead.textContent = shot;
        if (shot == 5) {
            reset();
            alert("Победа");
        }
    }
    else if (target.className == 'hole') {
    ++miss;
    lost.textContent = miss;
        if (miss == 10) {
            reset();
            alert("Вы проиграли");       
        }
    }
    function reset() {
        shot=0;
        miss=0;
        dead.textContent = shot;
        lost.textContent = miss; 
        return;
    }
}