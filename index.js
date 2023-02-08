const loadMealDb = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDb(data.meals))
    
}
const displayMealDb = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="displayMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
    });
}
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    loadMealDb(searchFieldText);
    
    searchField.value = '';
}
const displayMealDetail = (idMeal) => {
    // console.log('hello');
    console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchFood(data.meals[0]));  
}

const displaySearchFood = (card)=>{
    console.log(card);
    const displayCard = document.getElementById('display-card');
    displayCard.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
        <h2>Meal Details</h2>
        <div class="card">
            <img src="${card.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.strMeal}</h5>
                <p class="card-text">${card.strInstructions.slice(0,200)}</p>
            </div>
        </div>
    `
    displayCard.appendChild(mealDiv);
}






loadMealDb('');