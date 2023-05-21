function encriptar(){
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("encrypt-text").value = texto;
    document.getElementById("right-image").style.display = "none";
    document.getElementById("text-error").style.display = "none";
    document.getElementById("text-encrypt").innerHTML = texto;
    document.getElementById("copy").style.display = "inherit";
      
    const txt = document.getElementById("input-text");
    txt.value = "";
} 

var boton = document.getElementById("button-encrypt");
boton.onclick = function(){
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)){
        encriptar();
    }
    else{
        alert("Introducir solo minúsculas, no ingrese caracteres especiales");
    }
};
