const red = document.createElement("div");
const green = document.createElement("div");
const blue = document.createElement("div");
red.className = 'red';
green.className = 'green';
blue.className = 'blue';
blue.textContent = 'я вложен'
green.append(blue);
red.append(green);

console.log(red);