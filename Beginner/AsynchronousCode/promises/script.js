// const promise = new Promise((resolve, reject) => {
//     const sum = 1 + 2;
//     if (sum === 2) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// setTimeoutPromise(250)
//     .then(() => {
//         console.log("1");
//         return setTimeoutPromise(300);
//     })
//     .then(() => {
//         console.log("2");
//         return setTimeoutPromise(350);
//     })
//     .then(() => {
//         console.log("3");
//     });

// function setTimeoutPromise(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     });
// }

// Create a promise version of AddEventListener

// const button = document.querySelector("button");

// function addEventListenerPromise(element, method) {
//     return new Promise((resolve, reject) => {
//         element.addEventListener(method, resolve);
//     });
// }

// addEventListenerPromise(button, "click").then((e) => {
//     console.log("clicked");
// });

// Promise All
// Promise All will only ever call .then if every single promise inside of it actually succeeds
// if one of them fails, any of them, doesn't matter it'll call catch  with whatever result of the first failed promise is
Promise.all([Promise.resolve("1"), Promise.resolve("2"), Promise.resolve("3")])
    .then((messages) => {
        console.log(messages);
    })
    .catch((err) => {
        console.error(err);
    });

Promise.all([
    Promise.resolve("1"),
    Promise.reject("error on 2"),
    Promise.resolve("3"),
])
    .then((messages) => {
        console.log(messages);
    })
    .catch((err) => {
        console.error(err);
    });

// It'll take the very first promise that succeeds
// the first one to execute is what gets returned
Promise.any([
    Promise.resolve("1"),
    Promise.reject("error on 2"),
    Promise.resolve("3"),
])
    .then((messages) => {
        console.log(messages);
    })
    .catch((err) => {
        console.error(err);
    });

// Takes the first promise executed that actually fails or succeeds
Promise.race([
    Promise.resolve("1"),
    Promise.reject("error on 2"),
    Promise.resolve("3"),
])
    .then((messages) => {
        console.log(messages);
    })
    .catch((err) => {
        console.error(err);
    });

// Promise.allSettled
// It is going to wait for all our promises to finish.
// Whether they reject or they resolve it doesn't matter, it waits for every single one to finish
// then contains an array of objects with all promises result, if they resolved the object will have "fulfilled" status and value
// if they failed the object will have "rejected" status and reason
// so .catch doesn't even como into play in this scenario because it doesn't matter whether they reject or they resolve
// it's still going to just come down to our .then because it just waits for them all to finish and then gives us the
// status of all of them

Promise.allSettled([
    Promise.resolve("1"),
    Promise.reject("error on 2"),
    Promise.resolve("3"),
])
    .then((messages) => {
        console.log(messages);
    })
    .catch((err) => {
        console.error(err);
    });

// .finally does is it executes whether .then or .catch happen
// essentially, whether your promise resolves or rejects, it doesn't matter we always all finally
