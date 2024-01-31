/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};
myProfile.name = "Yenfhael Armas";
myProfile.photo = "images/profile.jpg";
myProfile.FavoriteFoods = ["Pizza", "Sushi", "Potatoes", "Dompling", "Burger"];
myProfile.hobbies = ["Running", "Reading", "Training", "Talking"];
myProfile.placesLived = [];

myProfile.placesLived.push({place: "El Tigre, VEN", length: "5 years"});
myProfile.placesLived.push({ place: "Maracay, VEN", length: "5 years"});
myProfile.placesLived.push({ place: "Ciudad Bolivar, VEN", length: "13 years"});



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").textContent = myProfile.name;


/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.FavoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
  });


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
  });
