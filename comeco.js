document.addEventListener("DOMContentLoaded", function () {
    const playerName = localStorage.getItem("playerName"); // Recupera o nome do jogador
    const playerNameElement = document.getElementById("playerName");

    if (playerName) {
        playerNameElement.textContent = `Bem-vindo, ${playerName}!`;
        console.log("Nome do usuário:", playerName);  // Verifica o nome no console
    } else {
        playerNameElement.textContent = "Nome não encontrado.";
        console.log("Nome não encontrado no localStorage.");
    }

    let dialogueIndex = 0;
    const dialogue = [
        "Você está na escola, o sinal toca e você está atrasada,\n você corre e esbarra em alguém,\n as duas caem...",
        "-Opa, desculpa! É que estou atrasada-",
        "Você olha pra frente e se depara com um garoto te olhando irritado,\n -Vê se olha por onde anda!-,\n ele sai",
        "-Nossa, eu pedi desculpa...-",
        "Você ignora e vai até a escola",
        "Você entra na sala de fininho para não ser pega pela professora",
        "Você cumprimenta suas amigas baixinho\n -E aí, perdi muita coisa?-",
        "-Se você tá sempre tão empenhada nas lições, por que fica se atrasando? - Helena",
        "-Não é de propósito, eu esbarrei em um garoto mal-humorado. Ele deve estar em um dia ruim, pedi desculpa e ele gritou comigo.",
        "-O quê? Ninguém tem um dia ruim o bastante pra xingar uma pessoa que tem cara de anjinho e ainda por cima pediu desculpa!! - Helena",
        "-Olha pra essa carinha! Você xingaria esse cachorrinho abandonado?!-",
        "-Pft, nunca... hahaha, acho que você judia muito do blabla-",
        "-Belas amigas eu tenho, hein-",
        "Trimmmm! O sinal tocou, vocês se levantam e saem conversando. De repente, um garoto surge na sua frente muito tímido",
        "-Érr, uhm, e-eu, bem... uhm... - Desconhecido",
        "-Aff, fala logo, não temos o dia todo - Helena",
    ];

    const dialogueElement = document.getElementById("dialogue");
    const gameContainer = document.getElementById("game");

    if (!dialogueElement) {
        console.error("Elemento #dialogue não encontrado!");
        return;
    }

    // Atualiza a fala na tela
    function updateDialogue() {
        dialogueElement.textContent = dialogue[dialogueIndex];
    }

    // Avança o diálogo ao clicar na tela
    gameContainer.addEventListener("click", function () {
        if (dialogueIndex < dialogue.length - 1) {
            dialogueIndex++;
            updateDialogue();
        }
    });

    // Inicializa o diálogo na tela
    updateDialogue();

    // Adiciona vídeo de fundo
    const video = document.createElement("video");
    video.src = "./videos/background.mp4";
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
