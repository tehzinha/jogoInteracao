function escolherFoto() {
    const nome = document.getElementById("nome").value;
    const sexoM = document.getElementById("sexoM").checked;
    const sexoF = document.getElementById("sexoF").checked;
    const imagensSelecionaveis = document.querySelectorAll(".selecionavel");


// Adiciona um evento de clique a cada imagem selecionável
imagensSelecionaveis.forEach(imagem => {
    imagem.addEventListener("click", () => {
        // Remove a classe "selecionada" de todas as imagens selecionáveis
        imagensSelecionaveis.forEach(imagem => imagem.classList.remove("selecionada"));
        // Adiciona a classe "selecionada" à imagem clicada
        imagem.classList.add("selecionada");
    });
});


    if (!nome || (!sexoM && !sexoF)) {
        alert("Por favor, informe seu nome e escolha o sexo.");
        return;
    }

    let fotosMasculinas = [
        "/joguinhoInteração/img/homi1.jpg",
        "/joguinhoInteração/img/homi2.jpg",
        "/joguinhoInteração/img/homi3.jpg"
    ];

    let fotosFemininas = [
        "caminho/para/imagem_feminina1.jpg",
        "caminho/para/imagem_feminina2.jpg",
        "caminho/para/imagem_feminina3.jpg"
    ];

    let fotoEscolhida;
    if (sexoM) {
        fotoEscolhida = fotosMasculinas;
    } else if (sexoF) {
        fotoEscolhida = fotosFemininas;
    }

    if (!fotoEscolhida) {
        alert("Por favor, escolha uma foto.");
        return;
    }

}

