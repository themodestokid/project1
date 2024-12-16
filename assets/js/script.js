    // if no recipes are found in local storage, use 
    // starterDrinks array.
const starterDrinks = [
    {
        title: 'Gin and Tonic',
        ingredients: ['2 parts gin', '3 parts tonic water', 'wedge of lime'],
        steps: ['mix gin and tonix over ice', 'serve with lime']
    },
    {
        title: 'Jack and Coke',
        ingredients: ['2 parts Jack Daniels', '3 parts coke', 'wedge of lemon'],
        steps: ['mix Jack and Coke over ice', 'serve with lemon']
    }
]

    // global array of drink recipes 
let recipes;

function writeLocalStorage(recipes) {
    localStorage.setItem('drinkRecipes'. JSON.stringify(recipes));
}

function readLocalStorage() {
    const data = localStorage.getItem('drinkRecipes');
    if (!data) {
        return starterDrinks;
    }
    return JSON.parse(data);
}

function fillCardCarousel() {
    //placeholder
}

// Execute starter code when application loads:

recipes = readLocalStorage();
fillCardCarousel();

