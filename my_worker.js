// worker.js
const { parentPort } = require('worker_threads');

let counter = 0;

console.log('sssA');
while (counter < 1e5) {
    counter++;
}

console.log('sss');
parentPort.postMessage(`Counted it: ${counter}`);