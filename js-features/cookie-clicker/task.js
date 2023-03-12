const image = document.getElementById("cookie");

function changeSizes(){
    const total = document.getElementById("clicker__counter");
    totalNum = Number(total.textContent);
    ++totalNum;
    total.textContent = totalNum;
    size = +image.width;
   
    if (size == 200)
        image.width=220;
    else 
        image.width=200;

};
cookie.onclick = changeSizes;