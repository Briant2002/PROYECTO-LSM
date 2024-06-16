
//En este arraglo guardamos las direcciones de las imagenes
const array = [
    {
        'case': ' ',
        'imagen': 'assets/letras/ESPACIO.PNG'
    },
    {
        'case': 'A',
        'imagen': 'assets/letras/A.PNG'
    },
    {
        'case': 'B',
        'imagen': 'assets/letras/B.PNG'
    },
    {
        'case': 'C',
        'imagen': 'assets/letras/C.PNG'
    },
    {
        'case': 'D',
        'imagen': 'assets/letras/D.PNG'
    },
    {
        'case': 'E',
        'imagen': 'assets/letras/E.PNG'
    },
    {
        'case': 'F',
        'imagen': 'assets/letras/F.PNG'
    },
    {
        'case': 'G',
        'imagen': 'assets/letras/G.PNG'
    },
    {
        'case': 'H',
        'imagen': 'assets/letras/H.PNG'
    },
    {
        'case': 'I',
        'imagen': 'assets/letras/I.PNG'
    },
    {
        'case': 'J',
        'imagen': 'assets/letras/J.PNG'
    },
    {
        'case': 'K',
        'imagen': 'assets/letras/K.PNG'
    },
    {
        'case': 'L',
        'imagen': 'assets/letras/L.PNG'
    },
    {
        'case': 'M',
        'imagen': 'assets/letras/M.PNG'
    },
    {
        'case': 'N',
        'imagen': 'assets/letras/N.PNG'
    },
    {
        'case': 'O',
        'imagen': 'assets/letras/O.PNG'
    },
    {
        'case': 'P',
        'imagen': 'assets/letras/P.PNG'
    },
    {
        'case': 'Q',
        'imagen': 'assets/letras/Q.PNG'
    },
    {
        'case': 'R',
        'imagen': 'assets/letras/R.PNG'
    },
    {
        'case': 'S',
        'imagen': 'assets/letras/S.PNG'
    },
    {
        'case': 'T',
        'imagen': 'assets/letras/T.PNG'
    },
    {
        'case': 'U',
        'imagen': 'assets/letras/U.PNG'
    },
    {
        'case': 'V',
        'imagen': 'assets/letras/V.PNG'
    },
    {
        'case': 'W',
        'imagen': 'assets/letras/W.PNG'
    },
    {
        'case': 'X',
        'imagen': 'assets/letras/X.PNG'
    },
    {
        'case': 'Y',
        'imagen': 'assets/letras/Y.PNG'
    },
    {
        'case': 'Z',
        'imagen': 'assets/letras/Z.PNG'
    }
];

//Variables y contantes 

const seccionTraducir = document.getElementById('sec-traducir');
const seccionAcerca = document.getElementById('sec-acerca-de');
const btnTraducir = document.getElementById('btn-traducir');
const btnAcerca = document.getElementById('btn-acerca');
const btnTraducirName = document.getElementById('btn-traducir-ya');
const contenedorTraslate = document.getElementById('contenedor-traslate');
const InputAccion = document.getElementById('input-traducir');
const btnReset = document.getElementById('btn-reset');


let nombre;
let opcionImagen;
let remover;



//traducir
btnTraducirName.addEventListener('click', traduccion);

//funcion traducir
function traduccion(){
    //input y se guarda la variable nombre
    nombre = document.getElementById('input-traducir').value;

    if(nombre == ""){
        alert("Ingresa tu nombre!")
    }else{
        //nombre letra por letra
        for(let i=0;i<nombre.length;i++){
            let descomposicion = nombre[i];
            //arreglo para validacion
            for(let j=0;j<array.length;j++){
                //arreglo para caso letra
                if(descomposicion.toUpperCase() == array[j].case){
                    //etiqueta de la imagen
                    opcionImagen =  `
                        <img class="remove" src="${array[j].imagen}" alt="${array[j].name}">
                    `;

                    contenedorTraslate.innerHTML += opcionImagen;
                    btnTraducirName.disabled = true;
                    InputAccion.disabled = true;
                    btnReset.style.display = 'flex';
                }
            }
        }
    }

    btnReset.addEventListener('click', reseteo);
    
};


function reseteo(){
    location.reload();
}


//cuando inicia la interfaz
function inicar(){
    seccionAcerca.style.display = 'none';
    btnTraducir.classList.add('is-active');
    btnReset.style.display = 'none';
};

//boton traducir
btnTraducir.addEventListener('click', function(){
    seccionAcerca.style.display = 'none';
    btnAcerca.classList.remove('is-active');
    seccionTraducir.style.display = 'flex';
    btnTraducir.classList.add('is-active');
})

//boton acerca de
btnAcerca.addEventListener('click', function(){
    seccionAcerca.style.display = 'flex';
    btnAcerca.classList.add('is-active');
    seccionTraducir.style.display = 'none';
    btnTraducir.classList.remove('is-active');
})





//se llama funcion iniciar
window.addEventListener('load', inicar);

