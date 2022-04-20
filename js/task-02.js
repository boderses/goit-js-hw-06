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







// potatoes.textContent = "Potatoes";
// console.log(potatoes);


// const mushrooms = document.createElement("li");

// mushrooms.textContent = "Mushrooms";
// console.log(mushrooms);

// const garlic = document.createElement("li");

// garlic.textContent = "Garlic";
// console.log(garlic);

// const tomatos = document.createElement("li");

// tomatos.textContent = "Tomatos";
// console.log(tomatos);

// const herbs = document.createElement("li");

// herbs.textContent = "Herbs";
// console.log(herbs);

// const condiments = document.createElement("li");

// condiments.textContent = "Condiments";
// console.log(condiments);