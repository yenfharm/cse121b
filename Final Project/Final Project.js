const button = document.querySelector('#button');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const image = document.querySelector('#image');

const generateUser = async () => {
    //query to the API
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const { results } = await response.json();
    const data = results[0];

    image.src = data.picture.medium;
    name.textContent = data.name.first + ' ' + data.name.last;
    email.textContent = data.email;
    phone.textContent = data.phone;
}

//create an event
document.addEventListener('DOMContentLoaded', generateUser);
button.addEventListener('click', generateUser);