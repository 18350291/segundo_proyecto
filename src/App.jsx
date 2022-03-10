function App() {
  const miObjeto = {
    nombre: "Alexis Antonio",
    apellidoPaterno: "Arano",
    apellidoMaterno: "Castañeda",
    edad: 22
  }

  return (
  <div className = "App">
    <h1>
      { /*"Soy " +
        miObjeto["nombre"] + 
        " " + 
        miObjeto["apellidoPaterno"] + 
        " " +
        miObjeto["apellidoMaterno"] +
        " " +
        "tengo " + miObjeto["edad"] + " años"
      */}
      {`Soy ${miObjeto.nombre} ${miObjeto.apellidoPaterno} ${miObjeto.apellidoMaterno} y tengo ${miObjeto.edad} años`}
    </h1>
  </div>);
}
export default App;
