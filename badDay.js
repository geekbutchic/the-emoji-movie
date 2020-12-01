const day = require('./day.js');


// with an inline function
let i = 0;

console.clear();
console.log('My day be all:');
for (let i = 0; i < day.length; i++) {
    console.log(day[i]);
}

const badDayIntervalId = setInterval(function () {
    console.clear();
    console.log('My day be all:');
    console.log(day[i]);
    i = i + 1;
    if (i >= day.length) {
        clearInterval(badDayIntervalId);
    }
}, 1000);



 