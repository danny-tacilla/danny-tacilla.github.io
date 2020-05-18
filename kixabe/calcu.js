let setResultado = (valor) => {
  document.getElementById("resultado").innerHTML = valor
}
let getResultado = () => {
  return document.getElementById("resultado").innerHTML
}
let agregar = (data) => {
  let r = getResultado()
  if (r != "0" || isNaN(data)) {
    setResultado(r + data)
  } else {
    setResultado(data)
  }
}
let raiz = (d) => {
  let r = getResultado()
  if (r != 0 || isNaN(d)) {
    setResultado(Math.sqrt(r))
  } else {
    setResultado(d)
  }
}
let calcular = () => {
  let r = eval(getResultado()).toFixed(10)
  setResultado(r)
}
let limpiar = () => {
  setResultado(0)
}
