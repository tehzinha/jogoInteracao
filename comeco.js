let dialogueIndex = 0; // Índice para controlar a posição atual na fala
const dialogue = [
    "Você esta na escola, o sinal toca e você esta atrasado,\n você corre e esbarra em alguém,\n os dois caem...",
    "-Opa, sinto muito, é que estou atrasado-",
    "Você olha pra frente e se depara com uma garota te olhando irritada,"+'\n'+ "-Vê se olha por onde anda!-,\n ela sai",
    "-Nossa eu pedi desculpa...-",
    "Você ignora e vai até a escola",
    "Você entra na sala de fininho para não ser pego pela professora",
    "Você cumprimenta seus amigos baixinho\n -eae galera, perdi muita coisa?-",
    "-Se você ta sempre tão empenhado nas lições porque fica se atrsando-Derek\n-Não é de propósito, eu esbarrei em uma garota mau humorada, ela deve estar em um dia bem ruim, pedi desculpa e ela gritou comigo",
    "-O quê?Ninguém tem um dia ruim o bastante pra xingar uma pessoa que tem cara de bobo que ainda por cima pediu desculpa!!-Derek ",
    "-Olha pra essa carinha! Você xingaria esse cachorrinho abandonado?!-",
    `-Pft, nunca...hahaha, acho que você judia muito do blabla`,
    "-Belos amigos eu tenho ein-",
    "Trimmmm! O sinal tocou, vocês se levantam e saem conversando. De repente uma garota surge na sua frente muita tímida",
    "-Érr, uhm, e-eu, bem...uhm-Desconhecida",
    "-Aff, fala logo, não temos o dia todo-Derek",
    //escolhas q vc vai fazerr
    
];

// Função para atualizar a fala na tela
function updateDialogue() {
    const dialogueElement = document.getElementById('dialogue');
    dialogueElement.textContent = dialogue[dialogueIndex];
}

// Função para avançar a fala quando o jogador pressionar Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        dialogueIndex++; // Avança para a próxima fala
        // Verifica se chegamos ao final da fala
        if (dialogueIndex >= dialogue.length) {
            dialogueIndex = dialogue.length - 1;
        }
        updateDialogue(); // Atualiza a fala na tela
    }
}


