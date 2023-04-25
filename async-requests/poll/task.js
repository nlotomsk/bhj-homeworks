let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const title = JSON.parse(xhr.responseText).data.title;
        document.getElementById('poll__title').textContent = title;

        const answers = JSON.parse(xhr.responseText).data.answers;

        for (let i = 0; i < answers.length; i++) {
            let button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answers[i];
            document.getElementById('poll__answers').insertAdjacentElement('beforeend', button);
            button.addEventListener('click', function() { 
                if(alert('Спасибо, ваш голос засчитан!')){
                }
                else {
                    window.location.reload();
                }
                });
            
            
        }    
    }
}) 