const listTab = document.querySelectorAll('.tab');

listTab.forEach(function(item,index){
    item.addEventListener('click', () => {
        const activRemove = document.querySelector('.tab_active');
        activRemove.classList.remove('tab_active');
        item.classList.add('tab_active');
        
        const contentTab = document.querySelectorAll('.tab__content');
        
        const activeContentRemove = document.querySelector('.tab__content_active');
        activeContentRemove.classList.remove('tab__content_active');

        contentTab[index].classList.add('tab__content_active');

    })

})