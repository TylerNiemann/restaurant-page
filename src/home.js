const home = () => {
    const body = document.querySelector('#content');
    body.innerHTML = "";
    const welcome = document.createElement('h1')
    welcome.textContent = 'WELCOME!';
    body.appendChild(welcome); 
}

export {home};