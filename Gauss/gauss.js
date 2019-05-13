/*
EJEMPLOS
1   1   -3  -27
2   -3  -8  -3
2   3   -11  6
--ToDo:
* en buscarRaices --->
*    filtrar las raices unicas, de manera que queden como objeto y así mostrar .fraccion
* Ruffini por cada raiz encontrada unica
* mostrar el resultado del factoreo
* Validar Inputs, solo enteros

Gauss : divisores de TI y CP. posibles raices. evaluar y encontrar raices.
(si no encuentra raices, avisar)   ---   OK

ruffini al polinomio con raicesEncontradasUnicas
    lo guardo en polinomioResultante
    mostrar factoreo:{
            pasar polinomioResultante a string
            polinomioResultanteString;
            raicesString = "";
            for (let i=0; i<raicesEncontradasUnicas.length; i++){
                raicesString += " * (X - " + raicesEncontradasUnicas[i].fraccion+")";
            } 
            mostrar polinomioResultante + raicesString; 
    }


*/
console.log("HOLI");
let polinomio = [];
let boton = document.querySelector('button');
let inputs = document.querySelectorAll('input');

let TI = 1;
let CP = 1;
boton.addEventListener('click', function(e){
    e.preventDefault();
    polinomio.length = 0; //Clear del array
    //if (validar()){
        Gauss();
    //} else {
    // // Manejo de error
    //}
})


function Gauss(){
    class PosibleRaiz {
        constructor(ti,cp){
            this.TI = ti;
            this.CP = cp;
            this.fraccion = ti+"/"+cp;
            this.valor = ti/cp;
        }
        mostrarFraccion(){
            console.log(this.fraccion);
        }
    }
    function cargarPosiblesRaices(){
        for (let i = 0; i < divisoresTI.length; i++){
            for (let j = 0; j < divisoresCP.length; j++){
                // console.log(divisoresTI[i]+"/"+divisoresCP[j]+" ")
                posiblesRaices.push(new PosibleRaiz(divisoresTI[i],divisoresCP[j]));
            }
        }
    }
    function mostrarPosiblesRaices(){
        console.log("Posibles raíces:");
        console.dir(posiblesRaices);
        // posiblesRaices.forEach(function(raiz){
        //     console.log(raiz.fraccion+" = "+raiz.valor);
        //     // raiz.mostrarFraccion();
        // });  
    }
    function cargarDivisoresTI(){
        //Normalización del signo
        let TInorm = Math.pow(Math.pow(TI,2),1/2);
        for (let i = TInorm; i >=0; i--){
            if (TInorm % i == 0){
                divisoresTI.push(parseInt(i));
                divisoresTI.push(parseInt(-i));
            }
        }
        console.log("Divisores TI : ");
        console.dir(divisoresTI);
    }
    function cargarDivisoresCP(){
        //Normalización del signo
        let CPnorm = Math.pow(Math.pow(CP,2),1/2);
        for (let i = CPnorm; i >=0; i--){
            if (CPnorm % i == 0){
                divisoresCP.push(parseInt(i));
                divisoresCP.push(parseInt(-i));

            }
        }
        console.log("Divisores CP : ");
        console.dir(divisoresCP);
    }
    function buscarRaices(){
        for (let i=0; i<posiblesRaices.length; i++){
            let evaluacion = 0;
            for (let j=0; j<polinomio.length; j++){
                // posibleraiz^i  (indice de polinomio)
                //(polinomio[i].value * posible raiz)^i
                evaluacion += polinomio[j] * Math.pow(posiblesRaices[i].valor,j);
            } 
            if (evaluacion==0){
                // console.log(posiblesRaices[i].fraccion+" es raíz");
                raicesEncontradas.push(posiblesRaices[i].valor);
            }  
        } 
        raicesEncontradasUnicas = [ ...new Set(raicesEncontradas) ];
        console.log("Raices encontradas:");
        console.dir(raicesEncontradasUnicas);
    }
    /* 
    //
    //-----------------MAIN-----------------------
    //
    */
   let divisoresTI = [];
   let divisoresCP = [];
   let posiblesRaices = [];
   let raicesEncontradas = [];
   let raicesEncontradasUnicas = [];

    //Cargar el array polinomio con los valores ingresados
    for (let i = inputs.length-1; i>=0; i--){
        polinomio.push(parseInt(inputs[i].value));
    }
    let polinomioParcial = polinomio;
    TI = polinomio[0];
    CP = polinomio[polinomio.length-1];
    console.dir(polinomio);
    console.log("CP: "+CP+" | TI: "+TI);
    //Divisores de TI y CP
    cargarDivisoresTI();
    cargarDivisoresCP();
    //Posibles raíces TI/CP
    cargarPosiblesRaices();
    mostrarPosiblesRaices();

    buscarRaices();
    if (raicesEncontradasUnicas.length > 0){
        ////
        console.log("Se encontraron raíces");
        //Ruffini
        //Mostrar resultado final
    } else {
        console.warn("No se encontraron raíces!!!!");
    }

    




    //----Fin de main----
}