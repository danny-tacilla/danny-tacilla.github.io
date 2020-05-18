let setResultado = (valor) => {
  document.getElementById("resultado").innerHTML = valor;
};
let getResultado = () => {
  return document.getElementById("resultado").innerHTML;
};
let agregar = (data) => {
  let r = getResultado();
  if (r != "0" || isNaN(data)) {
    setResultado(r + data);
  } else {
    setResultado(data);
  }
};
let raiz = (d) => {
  let r = getResultado();
  if (r != 0 || isNaN(d)) {
    setResultado(Math.sqrt(r).toFixed(10));
  } else {
    setResultado(d);
  }
};
let borrar = (b) => {
  let va = getResultado();
  let borrar = va.substring(0, va.length - 1);
  if (borrar == 0) {
    setResultado(0);
  } else {
    setResultado(borrar);
  }
};
let calcular = () => {
  let r = eval(getResultado());
  setResultado(r.toFixed(10));
};
let limpiar = () => {
  setResultado(0);
};
