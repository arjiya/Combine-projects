// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data fetched");
//     }, 1000);
// }

// fetchData(data => {
//     console.log(data);
// });

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error occurred");
//         }, 1000);
//     });
// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 1000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// }

// task1(() => {
//     task2(() => {
//         console.log("All tasks complete");
//     });
// });

function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 complete");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 2 complete");
            resolve();
        }, 1000);
    });
}

task1()
    .then(task2)
    .then(() => console.log("All tasks complete"));
