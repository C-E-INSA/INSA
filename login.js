// Elementos

const titulo = document.querySelector(".titulo");
const usuario = document.querySelector(".usuario");
const contraseña = document.querySelector(".contraseña");
const button = document.querySelector(".button");
const resultado = document.querySelector(".resultado");

// Usuarios y Contraseñas

const usuarioAlma = ["Kevin","Steven","William","Brian"];
const contraseñaAlma = ["Kevin11","Steven12","William13","Brian14"];

// Funciones

const redirigir = ()=>{
    location.href = "index.html";
}

const verificacion = ()=>{
    
    let u, c, l;
    let i = 0;
    l = 0

    while (i < 4){
        
        u = usuarioAlma[i]
        c = contraseñaAlma[i];
        
        if (usuario.value == u && contraseña.value == c){
            resultado.innerHTML = "Cargando...";
            resultado.classList.add("green");
            resultado.classList.remove("red");
            setTimeout(redirigir, 1500);
            break
        }
        else if (l < 4 && usuario.value != u && contraseña.value != c) {
            i++
        }
        else {   
            resultado.innerHTML = "el Usuario y la Contraseña no coinciden";
            resultado.classList.add("red");
            resultado.classList.remove("green");
            break;
        }
    }
}

// Codigo



button.addEventListener("click",(e)=>{
    e.preventDefault();
    
    verificacion();
})