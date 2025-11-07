const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

const fetchRecipes = async (query) => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response = await data.json();

    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <h3>${meal.strMeal}</h3>
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Cuisine:</strong> ${meal.strArea}</p>
            <a href="${meal.strSource}" target="_blank">View Recipe</a>
        `;
        recipeContainer.appendChild(recipeDiv);
    });
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);   
});
