const raitingItemsList = document.querySelectorAll('.product-page__star');

raitingItemsList.forEach(item => {
    item.addEventListener('click', function(e){
        item.dataset
        if(e.target.closest('.product-page__star')){
            const {itemValue} = this.dataset;
            e.target.closest('.product-page__raiting').dataset.totalValue = itemValue;
        }
    })
});