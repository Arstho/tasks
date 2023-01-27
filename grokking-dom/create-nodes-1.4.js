const ul = document.createElement("ul");
ul.className = 'list';
const li = document.createElement("li");
li.textContent = 'Привет, мир';
ul.append(li);
console.log(ul);