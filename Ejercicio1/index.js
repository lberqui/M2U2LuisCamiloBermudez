class Alumno{
	constructor(pNombre,sNombre,pApellido,sApellido,materia){
		this.pNombre=pNombre,
        this.sNombre=sNombre,
		this.pApellido=pApellido,
		this.sApellido=sApellido,
		this.materia=materia
		
	
	}
    
    Matricular(numero, nombre){
        
        let text1
        let total=0
        let valorm = prompt(text1 = "Ingrese el valor para la asignatura # " + numero + "");
        let text;
        if (valorm == null || valorm == "") {
          text = "Cancelado.";
        } else {
            valorm=valorm-(valorm*0.2)
          alert (text = "Hola " + nombre + ", ! Asignatura matriculada");
          total=parseInt(valorm);
         
        }
        
           return total
    }

    

}


var valor = document.getElementById("pNombre").value;
var lista = document.getElementById("pNombre");
var valorSeleccionado =lista.value;





const botonEA = document.querySelector("#aceptar")	
botonEA.addEventListener('click', function(){
    
    const Estudiante = new Alumno(
    
        document.getElementById("pNombre").value,
        document.getElementById("sNombre").value,
        document.getElementById("pApellido").value,
        document.getElementById("sApellido").value,
        document.getElementById("materia").value
    
    )

    let nombres = document.getElementById("pNombre").value + document.getElementById("pApellido").value;
    
    let materias = document.getElementById("materia").value;
    console.log(Estudiante.pNombre);
    Estudiante.pNombre;
    // alert(Estudiante.materia)
 
   let total=0, n = 1;
    for (var i = 0; i < materias ; i++) {
        n += i;
        total=total+Estudiante.Matricular(n, nombres); 
    }
    
    document.getElementById("descuento").value="$"+total*0.20;
    document.getElementById("totalM").value="$"+ parseInt(total+8000);
  
  
    
})





// const botonEncebdido=document.querySelector("#boton")

// botonEncebdido.addEventListener('click',celularUno.encender())
// celularUno.reinicio();
// celularUno.reinicio();