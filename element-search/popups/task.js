// const dead = document.getElementsByClassName("modal");
// console.log(dead.length);
// const var1 = dead.length;
// for (let i = 0; i < var1; i++) {
//     const element1 = document.getElementsByClassName("modal")[0];

//     console.log(element1.className);
//     element1.className = 'modal modal_aclive';
//     //console.log(element1.className);
//     //element.className = "modal_active";
//     //dead[i].className.textContent = `${dead[i].className.textContent} modal_aclive`;
//     //dead[i].className = "modal_aclive";
//     //dead[i].className = "modal_active";
//     //console.log(dead[0].className);
//     //console.log(dead[1].className);
//     //console.log(dead[i].className.textContent);
// }

const dead = document.getElementById("modal_main");
console.log(dead);
dead.className = "modal modal_active";
console.log(dead);

document.onclick = function(event) {
    var target = event.target 
                        console.log(target.className);
    var array = target.className.split(' ');
    let totalElem = array.length
                        //console.log(array);
        for (let i = 0; i < totalElem; i++) {
                        //console.log([i]);
            if (array[i] === 'modal__close'){
                for (let j = 0; j < totalElem; j++) {
                    if (array[j] === 'show-success'){
                        console.log(target);
                        console.log("in");
                        const dead2 = document.getElementById("modal_success");
                                console.log(dead2);
                        dead2.className = "modal modal_active";
                    } 
                    // else {
                    // const dead2 = document.getElementById("modal_main");
                    //         console.log(dead2);
                    // dead2.className = "modal";
                    //     console.log("exit");
                    // }
                } 
                const dead2 = document.getElementById("modal_success");
                             console.log(dead2);
                     dead2.className = "modal";
                         console.log("exit");
            } 

            
        }
    // if (target.className[0] == 'modal__close') {
    //     const dead1 = document.getElementById("modal modal_active");
    //     console.log(dead1);
    //     dead.className = "modal";
    //     console.log(dead1);}
    // dead.textContent = shot;
    //     if (shot == 5) {
    //         reset();
    //         alert("Победа");
    //     }
    // }
    // else if (target.className == 'hole') {
    // ++miss;
    // lost.textContent = miss;
    //     if (miss == 10) {
    //         reset();
    //         alert("Вы проиграли");       
    //     }
    // }
    // function reset() {
    //     shot=0;
    //     miss=0;
    //     dead.textContent = shot;
    //     lost.textContent = miss; 
    //     return;
    // }
}