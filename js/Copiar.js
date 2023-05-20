function copiar(){
    navigator.clipboard.writeText(
        document.getElementById("encrypt-text").value
    );
}

document.querySelector("copy").addEventListener("click", copiar);