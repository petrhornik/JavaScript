console.log("Running from app.js file!");

window.sessionStorage.setItem("UserLoggedIn", {
    isLoggedIn: true, 
    userId: 1,}
);

const isUserLoggedIn = window.sessionStorage.getItem("UserLoggedIn");
console.log("User logged in: ", isUserLoggedIn);