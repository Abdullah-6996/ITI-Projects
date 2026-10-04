`user strict`;
let searchInput = document.querySelector("#searchInput");
let userSelect = document.querySelector("#userSelect");
let dataRow = document.querySelector("#dataRow");

const foodList = [ 
'pizza',
'carrot', 'broccoli', 'asparagus', 'cauliflower', 'corn', 'cucumber', 'green pepper', 'lettuce', 'mushrooms', 'onion', 'potato', 'pumpkin', 'red pepper', 'tomato', 'beetroot', 'brussel sprouts', 'peas', 'zucchini', 'radish', 'sweet potato', 'artichoke', 'leek', 'cabbage', 'celery', 'chili', 'garlic',
'basil', 'coriander', 'parsley', 'dill', 'rosemary', 'oregano', 'cinnamon', 'saffron', 'green bean', 'bean', 'chickpea', 'lentil',
'apple', 'apricot', 'avocado', 'banana', 'blackberry', 'blackcurrant', 'blueberry', 'boysenberry', 'cherry', 'coconut', 'fig', 'grape', 'grapefruit', 'kiwifruit', 'lemon', 'lime', 'lychee', 'mandarin', 'mango', 'melon', 'nectarine', 'orange', 'papaya', 'passion fruit', 'peach', 'pear', 'pineapple', 'plum', 'pomegranate', 'quince', 'raspberry', 'strawberry', 'watermelon',
'salad', 'pizza', 'pasta', 'popcorn', 'lobster', 'steak', 'bbq', 'pudding', 'hamburger', 'pie', 'cake', 'sausage', 'tacos', 'kebab', 'poutine', 'seafood', 'chips', 'fries', 'masala', 'paella', 'som tam', 'chicken', 'toast', 'marzipan', 'tofu', 'ketchup', 'hummus', 'chili', 'maple syrup', 'parma ham', 'fajitas', 'champ', 'lasagna', 'poke', 'chocolate', 'croissant', 'arepas', 'bunny chow', 'pierogi', 'donuts', 'rendang', 'sushi', 'ice cream', 'duck', 'curry',
'beef', 'goat', 'lamb', 'turkey', 'pork', 'fish', 'crab', 'bacon', 'ham', 'pepperoni', 'salami', 'ribs'
];

let selectOptions = '';
foodList.forEach((food) => {
    selectOptions += `<option value="${food}">${food}</option>`;
});
userSelect.innerHTML = selectOptions;

async function fetchFoodData(searchTerm = `Pizza`) {
    try {
        let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
        let responseData = await response.json();
        displayContent(responseData.data.recipes);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function displayContent(recipes) {
    if(recipes.length === 0) {
        dataRow.innerHTML= `<p>No recipes found</p>`
    }

    let contentContainer = '';
    recipes.forEach((recipe) => {
        let {title, image_url, publisher} = recipe;
        contentContainer += `
        <div class="card mt-3" style="width: 18rem">
            <img class="card-img-top" src="${image_url}" alt="${title}"/>
            <div class="card-body">
                <h4 class="card-title text-center">${title}</h4>
                <p class="card-text text-center">${publisher}</p>
            </div>
        </div>
        `
    });

    document.querySelector(`#dataRow`).innerHTML = contentContainer;
}

searchInput.addEventListener(`input`, function(){
    fetchFoodData(searchInput.value.trim());
});
userSelect.addEventListener(`change`, function(){
    fetchFoodData(userSelect.value);
});

fetchFoodData(userSelect.value);