const num1 = 10;
const num2 = 20;

console.log("ami first");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())  
    .then((data) => console.log(data));

console.log("ami second");
