const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'trafic-light_red',
    [LIGHTS.yellow]: 'trafic-light_yellow',
    [LIGHTS.green]: 'trafic-light_green',
};

const NEXT_LIGHT_BY_LIGHT = {
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red,
};

let currentLight = LIGHTS.red;

function switchLight() {
    currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];
    console.log(currentLight);
}