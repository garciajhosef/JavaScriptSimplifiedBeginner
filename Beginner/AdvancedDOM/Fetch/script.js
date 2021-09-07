// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         //Log the name of each of the users
//         // data.forEach((user) => {
//         //     console.log(user.name);
//         // });
//         console.log(data.map((user) => user.name));
//     });

// Fetch will only throw an error if there is an actual error connecting to the server or getting data from the server
const URL = "https://jsonplaceholder.typicode.com/users";
async function doStuff() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const users = await response.json();
            console.log(users.map((user) => user.name));
        } else {
            console.error("FAILURE");
        }
    } catch (error) {
        console.log(error);
    }
}

doStuff();

const postsURL = "https://jsonplaceholder.typicode.com/posts";
async function sendData() {
    const response = await fetch(postsURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "New post",
        }),
    });
    const post = await response.json();
    console.log(post);
}

sendData();

const commentsURL = "https://jsonplaceholder.typicode.com/comments?postId=1";
async function getDataAwait() {
    const response = await fetch(commentsURL);
    const comments = await response.json();
    console.log(comments);
}

getDataAwait();

function getDataPromise() {
    const response = fetch(commentsURL)
        .then((res) => {
            return res.json();
        })
        .then((comments) => {
            console.log(comments);
        });
}

getDataPromise();
