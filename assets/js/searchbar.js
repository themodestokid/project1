// Select search input, button and results container
const searchField = document.querySelector('.search-field');
const searchButton = document.querySelector('#search-button');
const cardsHolder = document.getElementById('cards-holder');

// Search function (filters and displays the recipes)
function searchRecipes() {
    const searchText = searchField.value.toLowerCase(); 


    cardsHolder.innerHTML = '';

    // Loop through all recipes and filter based on search query
    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(searchText);
        const ingredientsMatch = recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(searchText)
        );
        const stepsMatch = recipe.steps.some(step =>
            step.toLowerCase().includes(searchText)
        );

        return nameMatch || ingredientsMatch || stepsMatch;
    });

    if (filteredRecipes.length === 0) {
        cardsHolder.innerHTML = '<p>No results found.</p>';
    } else {
        filteredRecipes.forEach((recipe, index) => {
            const card = renderRecipe(index, recipe);
            cardsHolder.innerHTML += card;
        });
    }
}
//calls the function when Enter is pressed
searchField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        searchRecipes();
    }
});

searchButton.addEventListener('click', function () {
    searchRecipes();
});

recipes = readLocalStorage();
createCardsFromData();

// Clear button
const clearButton = document.querySelector('#clear-button');

function clearSearch() {
    searchField.value = ''; 
    createCardsFromData(); 
}

clearButton.addEventListener('click', function () {
    clearSearch();
});