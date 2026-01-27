import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const parts = [
    ['The dog', 'My grandma', 'The mailman', 'My bird'],
    ['ate', 'peed', 'crushed', 'broke'],
    ['my homework', 'my phone', 'the car'],
    ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']
  ];

  const excuse = parts.map(p => p[Math.floor(Math.random() * p.length)]).join(' ');

  document.querySelector("#excuse").innerHTML = excuse;
};
