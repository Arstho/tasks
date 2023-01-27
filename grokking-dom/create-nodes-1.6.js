const body = document.body,
      div = document.createElement('div'),
      ul = document.createElement('ul'),
      liOne = document.createElement('li'),
      liTwo = document.createElement('li'),
      aOne = document.createElement('a'),
      aTwo = document.createElement('a');

aOne.href = 'https://instagram.com/intocode';
aOne.appendChild(document.createTextNode('наш инстаграм'));
aTwo.href = 'https://intocode.ru';
aTwo.appendChild(document.createTextNode('наш сайт'));

liOne.append(aOne);
liTwo.append(aTwo);
ul.append(liOne, liTwo);
div.append(ul);
body.append(div);

console.log(ul);