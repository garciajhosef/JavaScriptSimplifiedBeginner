function getValueWithDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

function getValueWithDelayError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error");
        }, delay);
    });
}

// Call getValueWithDelay twice and print out the returned value
// Then call getValueWithDelayError and make sure that the error is properly caught.

async function doStuff() {
    try {
        const value1 = await getValueWithDelay("value 1", 150);
        console.log(value1);
        const value2 = await getValueWithDelay("value 2", 250);
        console.log(value2);
        const value3 = await getValueWithDelayError("Error", 100);
        console.log(value3); //ignored
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally");
    }
}

doStuff();

// Parallel calls
for (let i = 0; i < 10; i++) {
    getValueWithDelay(i).then((value) => {
        console.log(value);
    });
}

async function doStuff2() {
    for (let i = 0; i < 10; i++) {
        const value = await getValueWithDelay(i, 150);
        console.log(value);
    }
}

doStuff2();
