// console.log("Start");

// function syncTask() {
//     for (let i = 0; i < 3; i++) {
//         console.log(`Sync Task ${i + 1}`);
//     }
// }

// syncTask();

// console.log("End");

// console.log("Start");

function asyncTask() {
    setTimeout(() => {
        console.log("Async Task Complete");
    }, 2000);
}

asyncTask();

console.log("End");

