const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const link1 = document.querySelectorAll('nav a')[0];
const link2 = document.querySelectorAll('nav a')[1];
const link3 = document.querySelectorAll('nav a')[2];
const link4 = document.querySelectorAll('nav a')[3];
const link5 = document.querySelectorAll('nav a')[4];
const link6 = document.querySelectorAll('nav a')[5];

link1.textContent = 'Services';
link2.textContent = 'Product';
link3.textContent = 'Vision';
link4.textContent = 'Features';
link5.textContent = 'About';
link6.textContent = 'Contact';

const headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';

const headerText = document.querySelector('.cta-text h1');
headerText.innerHTML = 'DOM Is Awesome'.split(" ").join("<br>");

const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = 'Get Started';

const title1 = document.querySelectorAll('.text-content h4')[0];
const title2 = document.querySelectorAll('.text-content h4')[1];
const title3 = document.querySelectorAll('.text-content h4')[2];
const title4 = document.querySelectorAll('.text-content h4')[3];
const title5 = document.querySelectorAll('.text-content h4')[4];

title1.textContent = 'Features';
title2.textContent = 'About';
title3.textContent = 'Services';
title4.textContent = 'Product';
title5.textContent = 'Vision';

const h4Text1 = document.querySelectorAll('.text-content p')[0];
const h4Text2 = document.querySelectorAll('.text-content p')[1];
const h4Text3 = document.querySelectorAll('.text-content p')[2];
const h4Text4 = document.querySelectorAll('.text-content p')[3];
const h4Text5 = document.querySelectorAll('.text-content p')[4];

h4Text1.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

h4Text2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

h4Text3.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

h4Text4.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

h4Text5.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.querySelector('#middle-img');
midImg.src = 'img/mid-page-accent.jpg';

const contactFooter = document.querySelector('.contact h4');
contactFooter.textContent = 'Contact';

const contactText1 = document.querySelectorAll('.contact p')[0];
const contactText2 = document.querySelectorAll('.contact p')[1];
const contactText3 = document.querySelectorAll('.contact p')[2];

contactText1.innerHTML = '123 Way 456 Street Somewhere, USA'.split('t S').join('t<br>S');
contactText2.textContent = '1 (888) 888-8888';
contactText3.textContent = 'sales@greatidea.io';

const footerText = document.querySelector('footer p');
footerText.textContent = 'Copyright Great Idea! 2018';

const navLink1 = document.createElement('a');
const navLink2 = document.createElement('a');

navLink1.textContent = 'Home';
navLink2.textContent = 'Reviews';
navLink1.href = '#';
navLink1.href = '#';

document.querySelector('nav').prepend(navLink1);
document.querySelector('nav').appendChild(navLink2);

const navLinks1 = document.querySelectorAll('nav a')[0];
const navLinks2 = document.querySelectorAll('nav a')[1];
const navLinks3 = document.querySelectorAll('nav a')[2];
const navLinks4 = document.querySelectorAll('nav a')[3];
const navLinks5 = document.querySelectorAll('nav a')[4];
const navLinks6 = document.querySelectorAll('nav a')[5];
const navLinks7 = document.querySelectorAll('nav a')[6];
const navLinks8 = document.querySelectorAll('nav a')[7];

navLinks1.style.color = 'green';
navLinks2.style.color = 'green';
navLinks3.style.color = 'green';
navLinks4.style.color = 'green';
navLinks5.style.color = 'green';
navLinks6.style.color = 'green';
navLinks7.style.color = 'green';
navLinks8.style.color = 'green';


