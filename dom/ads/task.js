const arrRotator = document.querySelectorAll('.rotator__case');

function rotate() {
    for (let index = 0; index < arrRotator.length; index++) {
        if (arrRotator[index].classList.contains('rotator__case_active')) {
            arrRotator[index].classList.remove('rotator__case_active');
            const nextRot = ++index % (arrRotator.length);
            arrRotator[nextRot].classList.add('rotator__case_active');
            break;
        }
    }
}

let timerId = setInterval(rotate, 1000);
