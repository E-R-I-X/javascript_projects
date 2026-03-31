const recipeList = document.getElementById("recipe-list");
const API_KEY = "ad612b5e38b94d01a4386440f76d0048";

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
  );

  const data = await response.json();

  return data.recipes;
}

function displayRecipes(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeEl = document.createElement("li");
    const recipeImg = document.createElement("img");
    const recipeTitle = document.createElement("h3");
    const recipeIngredients = document.createElement("p");
    const recipeLink = document.createElement("a");

    recipeEl.classList.add(
      "flex",
      "flex-col",
      "md:flex-row",
      "gap-4",
      "md:items-center",
      "md:justify-between",
      "mb-6",
      "md:mb-0",
      "shadow-md",
      "w-full",
      "max-w-5xl",
      "py-4",
    );

    recipeImg.src = recipe.image;
    recipeImg.alt = "recipe image";
    recipeImg.classList.add(
      "w-full",
      "md:w-48",
      "h-auto",
      "md:h-36",
      "object-cover",
      "rounded",
    );

    recipeTitle.innerText = recipe.title;
    recipeTitle.classList.add("text-xl", "font-bold", "min-w-52");

    recipeIngredients.innerHTML = `
      <strong>Ingredients: </strong>${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
    `;
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe";
    recipeLink.classList.add(
      "bg-blue-950",
      "w-full",
      "md:w-auto",
      "text-center",
      "md:text-left",
      "px-4",
      "py-2",
      "md:pr-14",
      "text-white",
      "font-bold",
      "uppercase",
      "rounded",
    );

    recipeList.appendChild(recipeEl);
    recipeEl.appendChild(recipeImg);
    recipeEl.appendChild(recipeTitle);
    recipeEl.appendChild(recipeIngredients);
    recipeEl.appendChild(recipeLink);
  });
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipes(recipes);
}

init();
