const recipeUrl =
  "http://api.yummly.com/v1/api/recipes?_app_id=16e7e911&_app_key=5178f718fc26c8da73f9de365814a624&allowedDiet[]=403^Paleo";
  
//recipe card
const cardContainer = document.querySelector('.card-container')
//landing page 
const animationBox = document.querySelector('.animation-box')
const buttonContainer = document.querySelector('.button-container')
const searchButton = document.querySelector('.search-button')

//input field & search button
const searchField = document.querySelector('form-inline')

apiSearch(recipeUrl);

var apiData = {}

buttonContainer.addEventListener("click", function() {
  animationBox.classList.add("hidden");
  buttonContainer.classList.add("hidden");
  searchButton.classList.add("hidden");
  buildRecipesCard(apiData)
})

searchButton.addEventListener("click", function(event) {
  event.preventDefault()
  const searchTerm = document.querySelector('.form-control').value
  recipeSearch(recipeUrl, searchTerm)
})

function apiSearch(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => apiData = response.matches)
}

function buildRecipesCard(recipes) {
    for (let i = 0; i < recipes.length; i++) {
        const recipesCard = document.createElement("div");
        recipesCard.classList.add('card', 'card-body')
        recipesCard.style.width = '18rem'
        cardContainer.appendChild(recipesCard)

        const recipesImg = document.createElement('img')
        recipesImg.src = recipes[i].smallImageUrls[0]
        recipesImg.alt = "img recipe"
        recipesImg.classList.add('card-img-top')
        recipesCard.appendChild(recipesImg)

        const recipesName = document.createElement('h5')
        recipesName.textContent = recipes[i].recipeName
        recipesName.classList.add('card-title')
        recipesCard.appendChild(recipesName)

        const recipesIngred = document.createElement('p')
        recipesIngred.textContent = recipes[i].ingredients
        recipesIngred.classList.add('card-text')
        recipesCard.appendChild(recipesIngred)
     }
}

function recipeSearch(baseUrl, searchTerm) {
    const searchUrl = baseUrl + "&q=" + searchTerm
    fetch(searchUrl)
        .then(response => response.json())
        .then(response => {
            apiData = response.matches
            animationBox.classList.add("hidden");
            buttonContainer.classList.add("hidden");
            searchButton.classList.add("hidden");
            buildRecipesCard(apiData)
        })  
}

