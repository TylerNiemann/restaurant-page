const initial = () => {
    const content = document.querySelector('#content');

    const navBar = document.createElement('div');
    navBar.setAttribute('class','navBar');
    content.appendChild(navBar);

    const btnHome = document.createElement('button');
    btnHome.setAttribute('id','btnHome');
    btnHome.textContent = 'Home';
    navBar.appendChild(btnHome);

    const navBarRight = document.createElement('div');
    navBarRight.setAttribute('class','navBarRight');
    navBar.appendChild(navBarRight);

    const main = document.createElement('div');
    main.setAttribute('class','main');
    content.appendChild(main);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('class','mainContent');
    main.appendChild(mainContent);

    const welcome = document.createElement('h1')
    welcome.textContent = 'Welcome to the Burger Place!';
    mainContent.appendChild(welcome); 

    const title= document.createElement('span')
    title.textContent = 'We have the best Burgers!';
    mainContent.appendChild(title); 

    const words = document.createElement('p')
    words.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';
    mainContent.appendChild(words); 

    const btnMenu = document.createElement('button');
    btnMenu.setAttribute('id','btnMenu');
    btnMenu.textContent = 'Menu';

    const btnAbout = document.createElement('button');
    btnAbout.setAttribute('id','btnAbout');
    btnAbout.textContent = 'About';
    
    navBarRight.appendChild(btnMenu);
    navBarRight.appendChild(btnAbout);
    
}

export {initial};