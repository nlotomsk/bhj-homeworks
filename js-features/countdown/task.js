function time() {
    let timerID = setInterval(function () {
       sec = document.getElementById("timer");
       secNum = Number(sec.textContent);
       --secNum 
       sec.textContent = secNum;
       if (secNum == 0) {
            alert ('«Вы победили в конкурсе!»');
            clearInterval(timerID);
            return;
          }
    }, 1000);
 };

 time();