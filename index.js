const btnNode = document.querySelector('.js-btn');
const traficLightNode = document.querySelector('.js-trafic-light');

initLight(traficLightNode);

btnNode.addEventListener('click', function () {
    switchLight(traficLightNode);
})