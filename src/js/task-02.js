const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsDom = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let item = document.createElement("li");

  item.textContent = ingredient;
  ingredientsDom.append(item);
});
