async function carregarAtletas() {
    try {
        const resposta = await fetch("/api/cartola");
        const dados = await resposta.json();

        const atletas = Object.values(dados.atletas);

        const melhor = atletas.sort((a, b) => b.media_num - a.media_num)[0];

        document.getElementById("melhorJogador").innerText =
            melhor.apelido + " (" + melhor.media_num.toFixed(2) + ")";

        const valorizacao = atletas.sort((a, b) => b.variacao_num - a.variacao_num)[0];

        document.getElementById("valorizacao").innerText =
            valorizacao.apelido + " (+" + valorizacao.variacao_num.toFixed(2) + ")";

    } catch (erro) {
        console.error("Erro:", erro);
    }
}

carregarAtletas();