document.addEventListener("DOMContentLoaded", async function () {
    try {
        const resposta = await fetch("/api/cartola");
        const dados = await resposta.json();

        // Rodada
        const rodadaEl = document.getElementById("rodada");
        if (rodadaEl) {
            rodadaEl.innerText = "Rodada " + dados.rodada_atual;
        }

        // Mercado
        const mercadoEl = document.getElementById("mercado");
        if (mercadoEl) {
            mercadoEl.innerText = "Mercado: " + (dados.status?.nome || "");
        }

        const atletas = Object.values(dados.atletas);

        // Melhor jogador
        const melhor = [...atletas].sort((a, b) => b.media_num - a.media_num)[0];

        const melhorEl = document.getElementById("melhorJogador");
        if (melhorEl) {
            melhorEl.innerText =
                melhor.apelido + " (" + melhor.media_num.toFixed(2) + ")";
        }

        // Maior valorização
        const valorizacao = [...atletas].sort((a, b) => b.variacao_num - a.variacao_num)[0];

        const valorizacaoEl = document.getElementById("valorizacao");
        if (valorizacaoEl) {
            valorizacaoEl.innerText =
                valorizacao.apelido + " (+" + valorizacao.variacao_num.toFixed(2) + ")";
        }

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
});