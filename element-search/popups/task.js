const modalSuccess = document.getElementById("modal_success");
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
                    modalSuccess.className = "modal modal_active";
                    return;
                }
            }
            var array2 = dead.className.split(' ');

            for (let k = 0; k < array2.length; k++) {
                if (array2[k] === 'modal_active') {
                    dead.className = "modal";
                }
            }
            var array3 = modalSuccess.className.split(' ');
            for (let p = 0; p < array3.length; p++) {
                if (array3[p] === 'modal_active') {
                    modalSuccess.className = "modal";
                }
            }
        }
    }
}
