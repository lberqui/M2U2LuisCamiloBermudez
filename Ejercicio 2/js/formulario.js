const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	numeros: /^[0-9]{1,64}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const campos = {
	numUno: false,
	numDos: false,
	numTres: false,
	numCuatro: false
}


const validarFormulario = (e) => {
	switch (e.target.name) {
		case "numUno":
			validarCampo(expresiones.numeros, e.target, 'numUno');
			validarCampoUno();
		break;
		case "numDos":
			validarCampo(expresiones.numeros, e.target, 'numDos');
			validarCampoDos();
		break;
		case "numTres":
			validarCampo(expresiones.numeros, e.target, 'numTres');
			validarCampoTres();
		break;
		case "numCuatro":
			validarCampo(expresiones.numeros, e.target, 'numCuatro');
			validarCampoCuatro();
		break;

	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


const validarCampoUno = () => {
	const input1 = document.getElementById('numUno');
	const input2 = document.getElementById('numDos');
	const input3 = document.getElementById('numTres');
	const input4 = document.getElementById('numCuatro');

	 if(input1.value == input2.value || input1.value == input3.value || input1.value == input4.value){
		document.getElementById(`grupo__numUno`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numUno`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__numUno i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__numUno i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__numUno .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['numUno'] = false;
	} else {
		document.getElementById(`grupo__numUno`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numUno`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__numUno i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__numUno i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__numUno .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['numUno'] = true;
	}
}

const validarCampoDos = () => {
	const input1 = document.getElementById('numUno');
	const input2 = document.getElementById('numDos');
	const input3 = document.getElementById('numTres');
	const input4 = document.getElementById('numCuatro');

	 if(input2.value == input1.value || input2.value == input3.value || input2.value == input4.value){
		document.getElementById(`grupo__numDos`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numDos`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__numDos i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__numDos i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__numDos .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['numDos'] = false;
	} else {
		document.getElementById(`grupo__numDos`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numDos`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__numDos i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__numDos i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__numDos .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['numDos'] = true;
	}
}

const validarCampoTres = () => {
	const input1 = document.getElementById('numUno');
	const input2 = document.getElementById('numDos');
	const input3 = document.getElementById('numTres');
	const input4 = document.getElementById('numCuatro');

	 if(input3.value == input2.value || input3.value == input1.value || input3.value == input4.value){
		document.getElementById(`grupo__numTres`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numTres`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__numTres i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__numTres i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__numTres .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['numTres'] = false;
	} else {
		document.getElementById(`grupo__numTres`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numTres`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__numTres i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__numTres i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__numTres .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['numTres'] = true;
	}
}


const validarCampoCuatro = () => {
	const input1 = document.getElementById('numUno');
	const input2 = document.getElementById('numDos');
	const input3 = document.getElementById('numTres');
	const input4 = document.getElementById('numCuatro');

	 if(input4.value == input1.value || input4.value == input3.value || input4.value == input2.value){	
		document.getElementById(`grupo__numCuatro`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numCuatro`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__numCuatro i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__numCuatro i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__numCuatro .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['numCuatro'] = false;


	} else {


		document.getElementById(`grupo__numCuatro`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__numCuatro`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__numCuatro i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__numCuatro i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__numCuatro .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['numCuatro'] = true;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.numUno && campos.numDos && campos.numTres && campos.numCuatro ){
		
		var valores = new Array(4); 
		let A,B,C,D

		const input1 = document.getElementById('numUno');
		const input2 = document.getElementById('numDos');
		const input3 = document.getElementById('numTres');
		const input4 = document.getElementById('numCuatro');
		A=input1.value;
		B=input2.value;
		C=input3.value
		D=input4.value;
		valores = [A,B,C,D];
		let a, n;

		for (var i = 0; i <= 3; i++) {
			n += i;
			for (var x = 0; x <= 3; x++) {
				
				if(valores[i]<valores[x]){
					a=valores[i];
					valores[i]=valores[x];
					valores[x]=a;
				}
				n += x;
			}
			
		}
			document.getElementById('mayor').value=valores[3];
			document.getElementById('menor').value=valores[0];
		
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

			
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});