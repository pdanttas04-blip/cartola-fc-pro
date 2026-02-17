async function carregarDadosCartola() {
    try {
        const resposta = await fetch("/api/cartola");
        const dados = await resposta.json();

        // Rodada
        document.getElementById("rodada").innerText =
            "Rodada " + dados.rodada_atual;

        // Mercado
        document.getElementById("mercado").innerText =
            "Mercado: " + dados.status?.nome;

        const atletas = Object.values(dados.atletas);

        // Melhor jogador (maior média)
        const melhor = [...atletas].sort((a, b) => b.media_num - a.media_num)[0];

        document.getElementById("melhorJogador").innerText =
            melhor.apelido + " (" + melhor.media_num.toFixed(2) + ")";

        // Maior valorização
        const valorizacao = [...atletas].sort((a, b) => b.variacao_num - a.variacao_num)[0];

        document.getElementById("valorizacao").innerText =
            valorizacao.apelido + " (+" + valorizacao.variacao_num.toFixed(2) + ")";

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

carregarDadosCartola();