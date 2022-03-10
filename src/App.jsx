//EcmaScript 5
//var saludo = "Hola a todos!"; //variable string
//var saludo = 5; //variable numeric
//var saludo = true; //variable booleana
//var saludo = null; // variable Null
//var saludo = undefined;
//var saludo = ["Tomate", "Tortilla", "Pan", "Medio cono de huevo", "Pollo"]; //Array
//var saludo = {
//  uno: "Hola",
//  dos: "a todos",
//  tres: 5,
//  cuatro: true,
//  cinco: null,
//  seis: undefined,
//  siete: 17,
//};
var textoVar = "texto var 1";
let textoLet = "texto let 1";
const textoConst = "texto const 1";

textoVar = "texto var 2";
textoLet = "texto let 2";
//textoConst = "texto const 2";

var textoVar = "texto var 3";
//let textoLet = "texto let 3";
//const textoConst = "texto const 3";

if (true){
  var textoVar = "texto var 4";
  let textoLet = "texto let 4";
  const textoConst = "texto const 4";
  console.log(textoLet);
  console.log(textoConst);

}

function App() {
  return (
    <div className = "App">
      <h1>{textoVar}</h1>
      <h1>{textoLet}</h1>
      <h1>{textoConst}</h1>
    </div>
  );
}
export default App;
