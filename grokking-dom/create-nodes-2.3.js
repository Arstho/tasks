let array = [{
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        name: 'intocode',
        url: 'https://intocode.ru'
    },
];

const render = (arr) => {
    const body = document.body,
          ul = document.createElement('ul');
    for (let item of arr) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.appendChild(document.createTextNode(item.name));
        li.append(a);
        ul.append(li);
    }
    body.append(ul);
    console.log(ul);
};

render(array);