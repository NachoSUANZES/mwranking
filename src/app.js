// JavaScript code
function fecha(){
const event = new Date();
const options = {  year: 'numeric', month: 'long', day: 'numeric' };
var actual = event.toLocaleDateString('es-ES', options);
return (actual);
}