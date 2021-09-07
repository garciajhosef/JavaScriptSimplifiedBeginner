// Local storage    | Cookies               | Session storage
// 10MB             | 4KB                   | 5MB
// Never expires    | Manual expiration     | Expire on tab close
// Client           | Client/Server         | Client
// Easy syntax      | Hard                  | Easy

localStorage.setItem("Name", "Chris");
sessionStorage.setItem("Age", "25");

console.log(localStorage.getItem("Name"));

const date = new Date(9999, 0, 1).toUTCString();
const postDate = new Date(1999, 0, 1).toUTCString();
document.cookie = `name=chris; expires=${date}`;
document.cookie = `age=25; expires=${date}`;
console.log(document.cookie);

//Delete cookie
document.cookie = `name=; expires=${postDate}`;
console.log(document.cookie);
