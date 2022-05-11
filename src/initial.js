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

    const welcome = document.createElement('h1')
    welcome.textContent = 'WELCOME!';
    main.appendChild(welcome); 


    const btnMenu = document.createElement('button');
    btnMenu.setAttribute('id','btnMenu');
    btnMenu.textContent = 'Menu';

    const btnAbout = document.createElement('button');
    btnAbout.setAttribute('id','btnAbout');
    btnAbout.textContent = 'About';

    const btnContact = document.createElement('button');
    btnContact.setAttribute('id','btnContact');
    btnContact.textContent = 'Contact';
    
    navBarRight.appendChild(btnMenu);
    navBarRight.appendChild(btnAbout);
    navBarRight.appendChild(btnContact);
   
}

export {initial};