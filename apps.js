
//FUNCION QUE LIMITA CARACTERES MAX100
function limita(elEvento, maximoCaracteres) {
    var elemento = document.getElementById("texto");
    var evento = elEvento || window.event;
    var codigoCaracter = evento.which || evento.keyCode;
    if (elemento.value.length >= maximoCaracteres) {
        return false;
    } else {
        return true;
    }
}

function actualizaInfo(maximoCaracteres) {
    var elemento = document.getElementById("texto");
    var info = document.getElementById("info");
    if (elemento.value.length >= maximoCaracteres) {
        info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";
    } else {
        info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
    }
}

//FUNCION PARA VALIDAR DATOS
function ValidaCampos(formulario) {
    var val_requerido = /\S+/;
    var val_email = /^(.+\@.+\..+)$/;

    for (i = 0; i < formulario.elements.length - 1; i++) {
        elemento = formulario.elements[i];
        if (elemento.type != "text")
            continue;
        var palabras = elemento.className.split(" ");
        for (k = 0; k < palabras.length; k++) {
            switch (palabras[k]) {
                case "fiel":
                    if (elemento.value.length < 1)
                        alert("Porfavor Ingrese Su Nombre");
                    break;
                case "correo":
                    if (!val_email.test(elemento.value))
                        alert("El Correo no es válido");
                    break;
                default:
                    break;
            }
        }
    }
}