(()=>{"use strict";const e=()=>{const e=document.querySelector(".main");e.innerHTML="",document.createElement("h1").textContent="GOOD FOOD HERE",e.appendChild(t())},t=()=>{const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Cheeseburger","Cheese, Lettuce, Sesame Bun, Pickles","$20.25")),e.appendChild(n("Burger","Lettuce, Sesame Bun, Pickles","$19.25")),e.appendChild(n("Toasted Burger","Cheese, Lettuce, Toasted Sesame Bun, Pickles","$13.25")),e.appendChild(n("Bacon Cheeseburger","Cheese, Lettuce, Sesame Bun, Pickles, Bacon","$18.95")),e.appendChild(n("Chili Burger","Cheese, Lettuce, Sesame Bun, Pickles, Chili","$16.25")),e.appendChild(n("Chicken Sandwich","Lettuce, Sesame Bun, Pickles, Chicken","$15.75")),e},n=(e,t,n)=>{const o=document.createElement("div");o.classList.add("menu-item");const c=document.createElement("h2");c.textContent=e;const d=document.createElement("p");d.textContent=t;const i=document.createElement("h4");return i.textContent=n,o.appendChild(c),o.appendChild(d),o.appendChild(i),o},o=()=>{const e=document.querySelector(".main");e.innerHTML="";const t=document.createElement("div");t.setAttribute("class","mainContent"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Welcome to the Burger Place!",t.appendChild(n);const o=document.createElement("span");o.textContent="We have the best Burgers!",t.appendChild(o);const c=document.createElement("p");c.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.",t.appendChild(c)},c=()=>{const e=document.querySelector(".main");e.innerHTML="";const t=document.createElement("h1");t.textContent="GOOD PEOPLE AND GOOD BURGERS",e.appendChild(t)};document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","navBar"),e.appendChild(t);const n=document.createElement("button");n.setAttribute("id","btnHome"),n.textContent="Home",t.appendChild(n);const o=document.createElement("div");o.setAttribute("class","navBarRight"),t.appendChild(o);const c=document.createElement("div");c.setAttribute("class","main"),e.appendChild(c);const d=document.createElement("div");d.setAttribute("class","mainContent"),c.appendChild(d);const i=document.createElement("h1");i.textContent="Welcome to the Burger Place!",d.appendChild(i);const u=document.createElement("span");u.textContent="We have the best Burgers!",d.appendChild(u);const a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.",d.appendChild(a);const s=document.createElement("button");s.setAttribute("id","btnMenu"),s.textContent="Menu";const l=document.createElement("button");l.setAttribute("id","btnAbout"),l.textContent="About",o.appendChild(s),o.appendChild(l)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#btnHome").addEventListener("click",o)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#btnMenu").addEventListener("click",e)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#btnAbout").addEventListener("click",c)}))})();