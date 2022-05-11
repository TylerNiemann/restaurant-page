const loadMenu = () => {
    const body = document.querySelector('.main');
    body.innerHTML = "";
    const welcome = document.createElement('h1') 
    welcome.textContent = 'GOOD FOOD HERE';  
    body.appendChild(createMenu());
}
const createMenu = () => {
    const menu = document.createElement('div') 
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('Cheeseburger','Cheese, Lettuce, Sesame Bun, Pickles','$20.25'));

    menu.appendChild(createMenuItem('Burger','Lettuce, Sesame Bun, Pickles','$19.25'));

    menu.appendChild(createMenuItem('Toasted Burger','Cheese, Lettuce, Toasted Sesame Bun, Pickles','$13.25'));

    menu.appendChild(createMenuItem('Bacon Cheeseburger','Cheese, Lettuce, Sesame Bun, Pickles, Bacon', '$18.95'));

    menu.appendChild(createMenuItem('Chili Burger','Cheese, Lettuce, Sesame Bun, Pickles, Chili', '$16.25'));

    menu.appendChild(createMenuItem('Chicken Sandwich','Lettuce, Sesame Bun, Pickles, Chicken', '$15.75'));

    return menu;  
}

const createMenuItem = (name,description,price) => {
const menuItem = document.createElement('div');
menuItem.classList.add("menu-item");

const foodName = document.createElement("h2");
foodName.textContent = name;

const foodDescription = document.createElement("p");
foodDescription.textContent = description;

const foodCost = document.createElement("h4");
foodCost.textContent = price;

menuItem.appendChild(foodName);
menuItem.appendChild(foodDescription);
menuItem.appendChild(foodCost);

return menuItem;
}

export {loadMenu};