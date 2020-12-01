const day = require('./day.js');



let i = 0;

const badDay = () => {
    console.clear();
    console.log('My day be all:');
    console.log(day[i]);
    i++
    if (i > day.length) {
        clearInterval(badDayIntervalId)
    }
}

console.clear();
console.log('My day be all');
const badDayIntervalId = setInterval(badDay, process.argv[2]);

