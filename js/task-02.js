const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const array = ingredients.map(i => {
  let vegetables = document.createElement("li")
  vegetables.classList.add("item")

  vegetables.textContent = i
  
  return vegetables;
}
);

const list = document.querySelector(`#ingredients`);
list.prepend(...array);

console.log(array);






