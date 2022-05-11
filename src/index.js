import {initial} from './initial';
import {loadMenu} from './menu';
import {home} from './home';
import {about} from './about';
import { contact } from './contact';

const init =(() =>{
document.addEventListener('DOMContentLoaded', initial)
}) ();

const switchTab = (() => {
    document.addEventListener('DOMContentLoaded', function(){
        const btnHome = document.querySelector('#btnHome');
        btnHome.addEventListener('click', home);
    });
    
    document.addEventListener('DOMContentLoaded', function(){ 
        const btnMenu = document.querySelector('#btnMenu');
        btnMenu.addEventListener('click', loadMenu);
    }); 

    document.addEventListener('DOMContentLoaded', function(){ 
        const btnAbout= document.querySelector('#btnAbout');
        btnAbout.addEventListener('click', about);
    }); 

    document.addEventListener('DOMContentLoaded', function(){ 
        const btnContact = document.querySelector('#btnContact');
        btnContact.addEventListener('click', contact);
    }); 

})();