//-------------Esta función encripta----------------
function desencriptar(){
    var texto = document.getElementById("input-text").value;
    texto = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
    document.getElementById("encrypt-text").value = texto;
} 

var boton = document.getElementById("button-decrypt");
boton.onclick = function(){
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)){
        desencriptar();
    }
    else{
        alert("Introducir solo minúsculas, no ingrese caracteres especiales")
    }
}