/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
templeList = []

/* async displayTemples Function */

const displayTemples = (temples) => {
  
  temples.forEach((temple) => {
    
    const article = document.createElement("article"); 
    const h3 = document.createElement("h3"); 
    h3.textContent = temple.templeName; 
    const img = document.createElement("img"); 
    img.src = temple.imageUrl; 
    img.alt = temple.location; 

    article.appendChild(h3); 
    article.appendChild(img); 
    templesElement.appendChild(article); 
  });
};    

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    const data = await response.json();
    templeList.push(
      ...data.map((temple) => ({
        ...temple,
        dedicatedDate: new Date(temple.dedicated.replace(/,/, "")),
      }))
    );
    displayTemples(templeList);
  };

/* reset Function */

// const reset = () => {
//   templesElement.innerHTML = ""; 
// };

const reset = () => {
    // Clear all <article> elements from the templesElement
    const templesElement = document.getElementById('temples');
    templesElement.innerHTML = '';
  };

/* filterTemples Function */

const filterTemples = (temples) => {
    // Clear the output first
    reset();
  
    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.getElementById('filtered').value;
  
    // Use a switch statement to filter the temples based on the selected value
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'nonutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        break;
    }
  };

getTemples();

/* Event Listener */

  // Add a change event listener to the HTML element with an ID of filtered
const filteredElement = document.getElementById('filtered');
filteredElement.addEventListener('change', () => {
  // Call the filterTemples function with the templeList as the argument
  filterTemples(templeList);
});