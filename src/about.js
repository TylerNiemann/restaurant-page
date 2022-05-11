const about= () => {
    const body = document.querySelector('.main');
    body.innerHTML = "";
    const welcome = document.createElement('h1') 
    welcome.textContent = 'GOOD PEOPLE AND GOOD BURGERS';  
    body.appendChild(welcome);
}

export {about};