//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="Principal">
			<div className="Secundaria">
				<div className="reloj"></div>
				<div className="CuatroDigitos">{props.NumeroCuatro}</div>
				<div className="TresDigitos">{props.NumeroTres}</div>
				<div className="DosDigitos">{props.NumeroDos}</div>
				<div className="UnoDigitos">{props.NumeroUno}</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	NumeroCuatro: PropTypes.number,
	NumeroTres: PropTypes.number,
	NumeroDos: PropTypes.number,
	NumeroUno: PropTypes.number
};
let contador = 0;
setInterval(function() {
	const cuatro = Math.floor(contador / 1000);
	const tres = Math.floor(contador / 100);
	const dos = Math.floor(contador / 10);
	const uno = Math.floor(contador / 1);
	contador++;
	ReactDOM.render(
		<SimpleCounter
			NumeroCuatro={cuatro}
			NumeroTres={tres}
			NumeroDos={dos}
			NumeroUno={uno}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
