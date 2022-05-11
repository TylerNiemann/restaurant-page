import {initial} from './initial';
import {menu} from './menu';
import {home} from './home';

const init =(() =>{
document.addEventListener('DOMContentLoaded', initial)

const body = document.querySelector('body');
const btnHome = document.createElement('button');
const btnOut = document.createElement('button');
btnHome.textContent = 'Home';
btnOut.textContent = 'Menu';
body.appendChild(btnHome);
body.appendChild(btnOut);

btnHome.addEventListener('click', home)
btnOut.addEventListener('click',menu)
}) ();