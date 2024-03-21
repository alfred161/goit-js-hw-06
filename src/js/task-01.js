let categories = document.getElementById("categories");
let content = `Number of categories: ${categories.childElementCount}\n\n`;

for (const category of categories.children) {
  // console.log(category.lastElementChild.childElementCount);
  content += `Category: ${category.firstElementChild.textContent}\nElements: ${category.lastElementChild.childElementCount}\n\n`;
}

console.log(content);
