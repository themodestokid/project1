const drinkNameInput = document.querySelector('#drinkInput');
const ingredientsInput = document.querySelector('#ingredientsInput');
const stepsInput = document.querySelector('#stepsInput');
const button = document.querySelector('.btn-primary');
let recipes;

button.addEventListener('click', function () {
    event.preventDefault();
    const ingredientsArray = ingredientsInput.value.split(",");
    const stepsArray = stepsInput.value.split(",");
    const newRecipe = {
        name: drinkNameInput.value.trim(),
        ingredients: ingredientsArray,
        steps: stepsArray,
    }
    recipes.push(newRecipe);
    writeLocalStorage();
    createCardsFromData();
});

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
  const starterDrinks = [
    {name: "Gin & Tonic", ingredients: ["Gin", "Tonic Water"], steps: ["combine gin and tonic water", "then mix"]}, 
    {name: "Jack & Coke", ingredients: ["Jack Daniels", "CocaCola"], steps: ["combine Jack Daniels and CocaCola", "then mix"]}, 
    {name: "Apple Juice", ingredients: ["Apple Juice"], steps: ["Pour Apple Juice"]}, 
    ];
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
        carousel.appendChild(renderCard(recipe));
    }
}




function listFromArray(array) {
    let result = "";
    for (item of array) {
        result = result + `<li>${item}</li>`;
    }
    return result
}

function renderRecipe(index, recipe) {
    return `<div class="card" style="width: 21rem;">
    
    <div class="card-body">
      <h5 class="card-title">${recipe.name}</h5>
      <ul class="card-text">${listFromArray(recipe.ingredients)}</ul>
      <ol class="card-text">${listFromArray(recipe.steps)}</ul>      <button type="button" class="btn btn-primary" data-toggle="modal" data-index="${index}" data-target="#editModal${index}">
        Edit Cocktail
      </button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-index="${index}" data-target="#deleteModal${index}">
        Delete
      </button>
      <div class="modal fade" id="editModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <label for="ingredientsInput${index}">Ingredients</label>
                  <input type="text" class="form-control" id="ingredientsInput${index}" value="${recipe.ingredients.join(", ")}">
                </div>
                <div class="form-group">
                  <label for="stepsInput${index}">Steps</label>
                  <input type="text" class="form-control" id="stepsInput${index}" value="${recipe.steps.join(", ")}">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-index="${index}" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Do you want to delete this drink?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" class="btn btn-primary" data-index="${index}" data-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

}

document.getElementById('cards-holder').addEventListener('click', function(event) {
  if (event.target.getAttribute('class') === 'btn btn-primary' && event.target.textContent == 'Yes') {
    const index2 = event.target.dataset.index;
    recipes.splice(index2, 1);
    writeLocalStorage();
    location.reload();
  }
})

function createCardsFromData() {
    searchRecipes();
}

function getIngredientsInput(index) {
  return document.getElementById(`ingredientsInput${index}`).value.split(", ");  
}

function getStepsInput(index) {
  return document.getElementById(`stepsInput${index}`).value.split(", ");  
}

function updateRecipe(index, ingredients, steps) {
  recipes[index].ingredients = ingredients;
  recipes[index].steps = steps;
}

document.getElementById('cards-holder').addEventListener('click', function(event) {
  if (event.target.getAttribute('class') === 'btn btn-primary' && event.target.textContent == 'Save changes') {
    const index = event.target.dataset.index;
    updateRecipe(index, getIngredientsInput(index), getStepsInput(index));
    writeLocalStorage();
    createCardsFromData();

  }
})

document.querySelector('.nav-link[href="#top"]').addEventListener('click', function (event) {
  event.preventDefault(); 
  window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
  });
});
