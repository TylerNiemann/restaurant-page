const home = () => {
    const body = document.querySelector('.main');
    body.innerHTML = "";

    const mainContent = document.createElement('div');
    mainContent.setAttribute('class','mainContent');
    body.appendChild(mainContent);

    const welcome = document.createElement('h1')
    welcome.textContent = 'Welcome to the Burger Place!';   
    mainContent.appendChild(welcome); 

    const title= document.createElement('span')
    title.textContent = 'We have the best Burgers!';
    mainContent.appendChild(title); 

    const words = document.createElement('p')
    words.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';
    mainContent.appendChild(words); 
}

export {home};