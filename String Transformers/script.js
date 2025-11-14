const input = document.getElementById('input');

const upperCase = document.querySelector('#uppercase span');
const lowerCase = document.querySelector('#lowercase span');
const camelCase = document.querySelector('#camelcase span');
const pascalCase = document.querySelector('#pascalcase span');
const snakeCase = document.querySelector('#snakecase span');
const kebabCase = document.querySelector('#kebabcase span');
const trim = document.querySelector('#trim span');

input.addEventListener('input', (e) => {
    console.log(e.target.value);
});
