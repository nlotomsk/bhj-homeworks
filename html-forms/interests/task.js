const interestCheck = [...document.querySelectorAll('.interest__check')];

interestCheck.forEach((check) => check.addEventListener('change', (event) => {
    let perent = event.target.closest('.interest');
    let intCheck = [...perent.querySelectorAll('.interest__check')];

    if (intCheck[0].checked) {
        intCheck.forEach(item => item.checked = true); 
        return;      
    } else {
        intCheck.forEach(item => item.checked = false);       
    }
    
}));