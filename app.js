/*const paras = document.querySelectorAll('p');

/paras.forEach(paras => {
    console.log(paras);
});

console.log(paras[2]); */


/*const para = document.querySelector('p')

para.innerText = 'I love what i do';

//To add to the previous text without overriding it
//para.innerText += 'I love what i do';

//To cycle through all the texts
/*const paras = document.querySelectorAll('p');

paras.forEach(paras =>{
console.log(paras.innerText);
paras.innerText +='A new trial';
});

const error = document.querySelector ('.error');*/

//console.log (error.innerHTML);

/*error.innerHTML += '<h2> I changed the content </h2>'

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'http//ican.com');
link.innerText = 'Check out my site';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'lizzie');
mssg.setAttribute('style', 'color:red;');

const title = document.querySelector('h1');

console.log(title.style);
console.log(title.style.color);

title.style.color = 'green';
title.style.fontSize ='50px';
*/

/*const button = document.querySelector('button');

button.addEventListener('click', () =>{
    console.log('you clicked me');
});

const items =document.querySelectorAll('li');

items.forEach(items => {
items.addEventListener('click', a => {
    console.log(a.target);
});
}); */

const button = document.querySelector('button');
const popup = document.querySelector('.popupwrapper');
const close = document.querySelector('.popupclose');

button.addEventListener('click', () =>{
    popup.style.display = 'block';
});
close.addEventListener('click', () =>{
    popup.style.display = 'none';
});
popup.addEventListener('click', () =>{
    popup.style.display = 'none';
});
