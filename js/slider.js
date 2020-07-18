const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [2000, 12000],
    tooltips: false,
    connect: true,
    step: 1,
    format: {
        to: function(value){
            return parseInt(value);
        },
        from: function(value){
            return parseInt(value);
        }
    },

    range: {
        'min': 0,
        'max':30000
    }
});

const inputPriceMin  = document.getElementById('price-min');
const inputPriceMax = document.getElementById('price-max');

slider.noUiSlider.on('update', function (values, handle) {

    const value = values[handle];

    if (handle) {
        inputPriceMax.value = value;
    }else{
        inputPriceMin.value = value;
    }
});

inputPriceMin.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
});

inputPriceMax.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
});