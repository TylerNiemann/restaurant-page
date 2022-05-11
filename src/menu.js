const menu = () => {
    const body = document.querySelector('#content');
    body.innerHTML = "";
    const welcome = document.createElement('h1') 
    welcome.textContent = 'GOOD FOOD HERE';  
    body.appendChild(welcome);
}

export {menu};