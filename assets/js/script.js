    // if no recipes are found in local storage, use 
    // starterDrinks array.
onst drinkNameInput = document.querySelector('#drinkInput');
const ingredientsInput = document.querySelector('#ingredientsInput');
const stepsInput = document.querySelector('#stepsInput');
const button = document.querySelector('.btn-primary');
let recipes;

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
    const test = JSON.parse(localStorage.getItem('drinkRecipes'));
    console.log(test[0]);
});
    // global array of drink recipes

let recipes;

function writeLocalStorage() {
    console.log('wriring recipes ', recipes)
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

function renderCard(recipe) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.textContent = recipe.title;
    return card;
}

function fillCardCarousel() {
    const carousel = document.getElementById("recipes");
    carousel.innerHTML = "";
    for (recipe of recipes) {
        console.log('appending card for ' + recipe.title)
        carousel.appendChild(renderCard(recipe));
    }
}

// Execute starter code when application loads:

// recipes = readLocalStorage();
fillCardCarousel();

const starterDrinks = [
    {name: "Gin & Tonic", ingredients: ["Gin", "Tonic Water"], steps: ["combine gin and tonic water", "then mix"]}, 
    {name: "Jack & Coke", ingredients: ["Jack Daniels", "CocaCola"], steps: ["combine Jack Daniels and CocaCola", "then mix"]}, 
    {name: "Apple Juice", ingredients: ["Apple Juice"], steps: ["Pour Apple Juice"]}, 

]

function createCardsFromData() {
    const charizard = document.getElementById("pikachu")
    for (let i = 0; i < starterDrinks.length; i++) {
        console.log(starterDrinks[i])
        const pikachu = `<div class="card" style="width: 21rem;">
        <img src="https://8thwondertea.com/cdn/shop/articles/custom_resized_175073ac-3882-473d-9cc7-b98eebd67d13_2048x.jpg?v=1678563564" 
        class="card-img-top" 
        alt="A glass of apple juice">
        <div class="card-body">
          <h5 class="card-title">${starterDrinks[i].name}</h5>
          <p class="card-text">Fex and Jason don't drink, sorry</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-index="${i}">
            Edit Cocktail
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Edit Cocktail</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="formGroupExampleInput">Ingredients</label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                    </div>
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Steps</label>
                      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
        charizard.innerHTML = pikachu;
    }



}

createCardsFromData();
