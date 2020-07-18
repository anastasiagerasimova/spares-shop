const selectorAllElements = document.querySelectorAll('.filter-left__field');

selectorAllElements.forEach(function(item) {
    item.addEventListener('click', function(e){
        if(e.target.classList.contains('filter-left__dropdown-toggle')) {

            this.querySelector('.filter-left__dropdown').classList.toggle('hidden');
            e.target.classList.toggle('filter-left__dropdown-toggle--closed');
        } 
    })
})

const allSelect = document.querySelectorAll('[data-select]');

allSelect.forEach(function(item) {
    item.addEventListener('click', function(e){

        if(e.target.hasAttribute('data-select-item')) {

            this.querySelector('[data-select-title]').textContent =  e.target.dataset.selectItem;

            var selectItems = this.querySelectorAll('[data-select-item]')
            selectItems.forEach(function(item) {
                item.classList.remove('selected')
            })
            e.target.classList.toggle('selected');

            this.querySelector('[data-select-dropdown]').classList.toggle('hidden');
            this.querySelector('[data-select-title]').classList.remove('icon-arrow-top');


        } else{
            this.querySelector('[data-select-dropdown]').classList.toggle('hidden');
            e.target.classList.toggle('icon-arrow-top');
        } 
    })
})

document.addEventListener('click', function(e) {

    if(!e.target.closest('[data-select]')) {
        this.querySelectorAll('[data-select-dropdown]').forEach(element => {
            element.classList.add('hidden');
        });
    }
});
