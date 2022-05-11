const initial = () => {
    const body = document.querySelector('#content');
    const welcome = document.createElement('h1')
    welcome.textContent = 'WELCOME!';
    body.appendChild(welcome); 
}

export {initial};