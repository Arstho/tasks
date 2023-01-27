let arr = ["html", "css", "js"];
const body = document.body;
const ul = document.createElement('ul');

for (let item of arr) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
};
body.append(ul);

console.log(ul);