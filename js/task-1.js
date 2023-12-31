const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('li.item');

console.log(`Number of Categories: ${items.length}`);

items.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryItems = item.querySelectorAll('ul > li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems}`)
});