const tabsLists = document.querySelectorAll('.tabs__list')

tabsLists.forEach(element => {

    element.addEventListener('click', (e)=>{
        if(e.target.classList.contains('tabs__link')){
            e.preventDefault();
            const hrefValue = e.target.getAttribute('href').split('#')[1];
            const currentTabs = e.target.closest('.tabs');

            currentTabs.querySelectorAll('.tabs__panel').forEach(element => {
                    element.classList.add('hidden');
            });

            currentTabs.querySelectorAll('.tabs__link').forEach(element => {
                element.classList.remove('tabs__link--active');
            });

            document.querySelector(`#${hrefValue}`).classList.remove('hidden');
            e.target.classList.add('tabs__link--active');
        }


    })
});

const tabsPanels = document.querySelectorAll('.product-info__block');

tabsPanels.forEach(element => {
    element.addEventListener('click', function(e){
        if(e.target.classList.contains('product-info__block-link')){
            e.preventDefault(); 
            e.target.classList.toggle('product-info__block-link--active');
            this.querySelector('.product-info__block-wrapper').classList.toggle('product-info__block-wrapper--active');
        }
    })
});




