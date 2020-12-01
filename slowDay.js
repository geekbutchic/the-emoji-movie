const day = require('./day.js');

let i = 0;

const slowDay = () => {
    console.clear();
    console.log('My day be all:');
    console.log(day[i]);
    i = i + 1;
    if (i > day.length) {
        clearInterval(slowDayIntervalId);
    }
}

console.clear();
console.log('My day be all:');
const slowDayIntervalId = setInterval(slowDay, 3000);

