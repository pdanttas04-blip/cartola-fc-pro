document.addEventListener("DOMContentLoaded", function () {
    carregarDados();
});

async function carregarDados() {
    try {
        const response = await fetch("/api/cartola");
        const dados = await response.json();

        // Pega todos atletas
        const atletas = Object.values(dados.atletas);

        // Melhor jogador (maior média)
        const melhor = atletas.sort((a, b) => b.media_num - a.media_num)[0];

        document.getElementById("melhorJogador").innerText =
            melhor.apelido + " - Média: " + melhor.media_num;

        document.getElementById("capitao").innerText =
            melhor.apelido;

        document.getElementById("tecnico").innerText =
            "Técnico baseado no melhor ataque";

        document.getElementById("valorizacao").innerText =
            melhor.apelido + " - Valorização: " + melhor.variacao_num;

    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}