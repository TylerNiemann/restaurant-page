const contact = () => {
    const body = document.querySelector('.main');
    body.innerHTML = "";
    const welcome = document.createElement('h1') 
    welcome.textContent = 'GOOD LOCATION HERE';  
    body.appendChild(welcome);
}

export {contact};