/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Yenfhael Armas";
let currentYear = 2024;
let profilePicture = "images/profile.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
// nameElement.textContent = "Yenfhael Armas";

const foodElement = document.getElementById('food');
// foodElement.textContent = "Potatoes"

const yearElement = document.querySelector('#year');
yearElement.textContent = "2024";

const imageElement = document.getElementsByTagName("img")[0];
imageElement.src = '/images/profile.jpg';


/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>Yenfhael Armas</strong>' //I can typing my name in this way or like is on 16 line of the code
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

let favoriteFoods = ["pizza", "burger", "potatoes"];

let anotherFavoriteFood = "sushi";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += "<br>" + favoriteFoods;

favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods;

favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods;
