const animals = document.querySelectorAll('.item');
console.log(`Number of categories: ${animals.length}`);


const categories = Array.from(document.querySelector('#categories').children);
for (let el of categories) {
    let category = el.firstElementChild.textContent;   
    let quantityEl = el.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${quantityEl}`);
};

