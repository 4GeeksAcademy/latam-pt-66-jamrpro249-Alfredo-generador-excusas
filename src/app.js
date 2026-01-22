import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Copie el contenido del ejemplo para hacerlo lo mas parecido posible
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//Cree variables para obtener la longitud length al azar 
    let rdmWho = Math.floor(Math.random() * who.length);
    let rdmAction = Math.floor(Math.random() * action.length);
    let rdmWhat = Math.floor(Math.random() * what.length);
    let rdmWhen = Math.floor(Math.random() * when.length);

// aquí concatene las variable para obtener una sola frase
    let randomExcuse = who[rdmWho] + " " + action[rdmAction] + " " + what[rdmWhat] + " " + when[rdmWhen];
    
//Aquí selecciono el elemento id del HTML para cambiar su contenido al refrescar la pagina. 
    document.querySelector("#excuse").innerHTML = randomExcuse; 

  console.log("Hello Rigo from the console!");
};
