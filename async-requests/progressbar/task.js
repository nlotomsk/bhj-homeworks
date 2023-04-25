const send = document.getElementById('send');
const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );


send.addEventListener('click', (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.addEventListener('progress', function(e) {
        progress.value = e.loaded / e.total;
    });
    xhr.send(formData);
});