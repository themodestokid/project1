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
const drinkNameInput = document.querySelector('#drinkInput');
const ingredientsInput = document.querySelector('#ingredientsInput');
const stepsInput = document.querySelector('#stepsInput');
const button = document.querySelector('.btn-primary');
let recipes = [];
writeLocalStorage();

button.addEventListener('click', function () {
    event.preventDefault();
    let storedArray = localStorage.getItem('drinkRecipes');
    let array = storedArray ? JSON.parse(storedArray) : [];
    const newRecipe = {
        drinkName: drinkNameInput.value.trim(),
        ingredients: ingredientsInput.value.trim(),
        steps: stepsInput.value.trim(),
    }
    array.push(newRecipe);
    localStorage.setItem('drinkRecipes', JSON.stringify(array));
});
    // global array of drink recipes

let recipes;

function writeLocalStorage() {
    localStorage.setItem('drinkRecipes', JSON.stringify(recipes));
}

function addRecipe(recipe) {
    recipes.push(recipe);
    writeLocalStorage(recipes);
    fillCardCarousel();
}

function editRecipe(index, recipe) {
    recipes[index] = recipe;
    writeLocalStorage(recipes);
    fillCardCarousel();
}

function readLocalStorage() {
    const data = localStorage.getItem('drinkRecipes');
    if (!data) {
        return starterDrinks;
    }
    return JSON.parse(data);
}

function fillCardCarousel() {
}

recipes = readLocalStorage();
fillCardCarousel();
