const menu = () => {
    const body = document.querySelector('.main');
    body.innerHTML = "";
    const welcome = document.createElement('h1') 
    welcome.textContent = 'GOOD FOOD HERE';  
    body.appendChild(welcome);
}

export {menu};