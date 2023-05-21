function copiar() {
    var content = document.querySelector("#encrypt-text");
    content.select();
    document.execCommand("copy");
    Swal.fire(
        'Copiado',
        'El contenido fue copiado',
        'success'
    );
}

var botonCopiar = document.getElementById("button-copy");
botonCopiar.onclick = function() {
    copiar();
};


