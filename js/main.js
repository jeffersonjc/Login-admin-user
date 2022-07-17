/* Navegación entre formularios */
document.addEventListener("DOMContentLoaded", () => {
    const formularioRecuperarPw = document.querySelector("#recuperar-pw");
    const formularioCrearCuenta = document.querySelector("#crear-cuenta");
    const formularioInicioSesion = document.querySelector("#login");
    const errorUsuario = document.getElementById("error-usuario-inicio");
    const errorPw = document.getElementById("error-pw-inicio");
    
    document.querySelector("#enlace-recuperar-pw-1").addEventListener("click", e => {
        e.preventDefault();
        formularioRecuperarPw.classList.remove("form_hidden");
        formularioInicioSesion.classList.add("form_hidden");
        formularioCrearCuenta.classList.add("form_hidden");
        errorUsuario.innerHTML = "";
        errorPw.innerHTML = "";
    });

    document.querySelector("#enlace-recuperar-pw-2").addEventListener("click", e => {
        e.preventDefault();
        formularioRecuperarPw.classList.remove("form_hidden");
        formularioInicioSesion.classList.add("form_hidden");
        formularioCrearCuenta.classList.add("form_hidden");
        errorUsuario.innerHTML = "";
        errorPw.innerHTML = "";
    });

    document.querySelector("#enlace-crear-cuenta-1").addEventListener("click", e => {
        e.preventDefault();
        formularioCrearCuenta.classList.remove("form_hidden");
        formularioInicioSesion.classList.add("form_hidden");
        formularioRecuperarPw.classList.add("form_hidden");
        errorUsuario.innerHTML = "";
        errorPw.innerHTML = "";    
    });

    document.querySelector("#enlace-crear-cuenta-2").addEventListener("click", e => {
        e.preventDefault();
        formularioCrearCuenta.classList.remove("form_hidden");
        formularioInicioSesion.classList.add("form_hidden");
        formularioRecuperarPw.classList.add("form_hidden");
        errorUsuario.innerHTML = "";
        errorPw.innerHTML = "";       
    });
    
    document.querySelector("#iniciar-sesion-1").addEventListener("click", e => {
        e.preventDefault();
        formularioInicioSesion.classList.remove("form_hidden");
        formularioRecuperarPw.classList.add("form_hidden");
        formularioCrearCuenta.classList.add("form_hidden");
        errorUsuario.innerHTML = "";
        errorPw.innerHTML = "";
    });   
    
    document.querySelector("#iniciar-sesion-2").addEventListener("click", e => {
        e.preventDefault();
        formularioInicioSesion.classList.remove("form_hidden");
        formularioRecuperarPw.classList.add("form_hidden");
        formularioCrearCuenta.classList.add("form_hidden");
        errorUsuario.innerHTML = "";
        errorPw.innerHTML = "";
    }); 
});

/* Validación de campos */
const errorMsg = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".form_input_error_msg");

    errorDisplay.innerText = message;
    inputControl.classList.add("form_input_error_msg");
    inputControl.classList.remove("form_msg_success");
}

const successMsg = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".form_input_error_msg");

    errorDisplay.innerText = "";
    inputControl.classList.add("form_msg_success");
    inputControl.classList.remove("form_input_error_msg");
}

const form = document.getElementById("login");
const usernameLogin = document.getElementById("idUsuarioInicio");
const passwordLogin = document.getElementById("pwUsuarioInicio");

/* Evitar href de botón y llamar validación*/
document.addEventListener('submit', e => {
    e.preventDefault();
    validarCampos();
});

const validarCampos = () => {
    /* Formulario Inicio sesion */
    const usernameLoginValue = usernameLogin.value.trim();
    const passwordLoginValue = passwordLogin.value.trim();

    if(usernameLoginValue === "") {
        errorMsg(usernameLogin, "Usuario requerido");    
    } else {
        successMsg(usernameLogin, "test");
    }

    if(passwordLoginValue === "") {
        errorMsg(passwordLogin, "Contraseña requerida");    
    } else {
        successMsg(passwordLogin, "test");
    }

    if(usernameLoginValue === "admin" && passwordLoginValue === "admin") {
        window.location.href = "http://127.0.0.1:5500/admin.html"
    }

    if(usernameLoginValue === "user" && passwordLoginValue === "user") {
        window.location.href = "http://127.0.0.1:5500/user.html"
    }
};
