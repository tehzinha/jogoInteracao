document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome");
    const sexoM = document.getElementById("sexoM");
    const sexoF = document.getElementById("sexoF");
    const botaoContinuar = document.getElementById("botaoContinuar");

    // Função para verificar se o nome e o gênero foram preenchidos
    function verificarFormulario() {
        if (nomeInput.value && (sexoM.checked || sexoF.checked)) {
            botaoContinuar.disabled = false;
        } else {
            botaoContinuar.disabled = true;
        }
    }

    nomeInput.addEventListener("input", verificarFormulario);
    sexoM.addEventListener("change", verificarFormulario);
    sexoF.addEventListener("change", verificarFormulario);

    // Salva o nome e gênero no localStorage ao clicar no botão
    botaoContinuar.addEventListener("click", function () {
        const nome = nomeInput.value;
        const genero = sexoM.checked ? "M" : "F";

        // Salva o nome e o gênero no localStorage
        localStorage.setItem("playerName", nome);
        localStorage.setItem("playerGender", genero);

        // Redireciona para a próxima página (comeco.html)
        window.location.href = "comeco.html";
    });


    // Adiciona vídeo de fundo
    const video = document.createElement("video");
    video.src = "./videos/background.mp4"; // Caminho atualizado do vídeo
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.zIndex = "-1";
    document.body.prepend(video);
});
