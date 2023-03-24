const dead = document.getElementById("modal_main");
dead.className = "modal modal_active";
document.onclick = function (event) {
    var target = event.target
    var array = target.className.split(' ');
    let totalElem = array.length
    for (let i = 0; i < totalElem; i++) {
        if (array[i] === 'modal__close') {
            for (let j = 0; j < totalElem; j++) {
                if (array[j] === 'show-success') {
                    const dead2 = document.getElementById("modal_success");
                    dead2.className = "modal modal_active";
                    return;
                }
            }
            const dead3 = document.getElementById("modal_main");
            var array2 = dead3.className.split(' ');

            for (let k = 0; k < array2.length; k++) {
                if (array2[k] === 'modal_active') {
                    dead3.className = "modal";
                }
            }
            const dead4 = document.getElementById("modal_success");
            var array3 = dead4.className.split(' ');
            for (let p = 0; p < array3.length; p++) {
                if (array3[p] === 'modal_active') {
                    dead4.className = "modal";
                }
            }
        }
    }
}