function mudar_paragrafo() {
    let paragrafo = document.getElementById("paragrafo"); //Vai pegar o elemento com id no html
    paragrafo.innerHTML = "Botão Clicado!";

    let getImage = document.getElementById("imageGif"); //Vai pegar o elemento com id no html
    getImage.innerHTML = ""; //Vai limpar o container da imagem


    const image = document.createElement("img"); //Vai criar um elemento de imagem
    image.src = "assets/images/rigby_pc.gif"; //Vai adicionar o caminho da imagem

    // Adiciona a imagem dentro do container na página
    getImage.appendChild(image);



}

const btn = document.getElementById("btnRecarregar"); // vai pegar o elemento com id no html
//Vai adicionar um evento de clicar no botão para reiniciar a pagina
btn.addEventListener("click",
    function(){
    location.reload();
    }
);