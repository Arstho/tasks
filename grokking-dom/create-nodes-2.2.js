let array = ["html", "css", "js"];

const render = (arr) => {
    const body = document.body;
    const ul = document.createElement('ul');

    for (let item of arr) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    };
    body.append(ul);
    console.log(ul);
};

render(array);