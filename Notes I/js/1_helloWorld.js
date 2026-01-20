document.write("hello world js ");
document.write("hello world");
console.log("hello world in the console");

/**when the window loads, we call this function setup 
 * onload is an event, the function setup will run when the window has loaded
*/
window.onload = setup
function setup() {
    console.log("running setup");
    document.write("HELLO WORLD AFTER THE LOAD IN FUNCTION")
}