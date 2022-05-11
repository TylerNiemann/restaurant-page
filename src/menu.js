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
    menu.appendChild(
        createMenuItem(
            'Cheeseburger',
            'Cheese, Lettuce, Sesame Bun, Pickles'
        )
    )
    menu.appendChild(
        createMenuItem(
            'Burger',
            'Lettuce, Sesame Bun, Pickles'
        )
    )
    menu.appendChild(
        createMenuItem(
            'Toastedburger',
            'Cheese, Lettuce, Toasted Sesame Bun, Pickles'
        )
    )
    menu.appendChild(
        createMenuItem(
            'Bacon Cheeseburger',
            'Cheese, Lettuce, Sesame Bun, Pickles, Bacon'
        )
    )
    return menu;  
}

const createMenuItem = (name,description) => {
const menuItem = document.createElement('div');
menuItem.classList.add("menu-item");

const foodName = document.createElement("h2");
foodName.textContent = name;

const foodDescription = document.createElement("p");
foodDescription.textContent = description;

menuItem.appendChild(foodName);
menuItem.appendChild(foodDescription);

return menuItem;
}

export {loadMenu};