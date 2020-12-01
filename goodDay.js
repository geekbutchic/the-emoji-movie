const day = require('./day.js');


let i = day.length - 1;

const goodDay = () => {
    console.clear();
    console.log('My day be all:');
    console.log(day[i]);
    i = i - 1;
    if (i < 0) {
        clearInterval(goodDayIntervalId);
    }
}

console.clear();
console.log('My day be all:');
const goodDayIntervalId = setInterval(goodDay, 1000);


