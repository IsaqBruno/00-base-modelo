function mudar_paragrafo() {
    let paragrafo = document.getElementById("paragrafo"); //Vai pegar o elemento com id no html
    paragrafo.innerHTML = "Botão Clicado!";
}

const btn = document.getElementById("btnRecarregar"); // vai pegar o elemento com id no html
//Vai adicionar um evento de clicar no botão para reiniciar a pagina
btn.addEventListener("click",
    function(){
    location.reload();
    }
);