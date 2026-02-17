// ===========================
// CARTOLA - STATUS DO MERCADO
// ===========================

async function carregarStatusCartola() {
    try {
        const resposta = await fetch("https://api.cartola.globo.com/mercado/status");
        const dados = await resposta.json();

        document.getElementById("rodada").innerText = 
            "Rodada " + dados.rodada_atual;

        document.getElementById("mercado").innerText = 
            "Mercado: " + dados.status.nome;

    } catch (erro) {
        console.error("Erro ao carregar status Cartola:", erro);
    }
}

// ===========================
// CARTOLA - ATLETAS
// ===========================

async function carregarAtletas() {
    try {
        const resposta = await fetch("https://api.cartola.globo.com/atletas/mercado");
        const dados = await resposta.json();

        const atletas = Object.values(dados.atletas);

        // Melhor jogador (maior média)
        const melhor = atletas.sort((a, b) => b.media_num - a.media_num)[0];

        document.getElementById("melhorJogador").innerText =
            melhor.apelido + " (" + melhor.media_num.toFixed(2) + ")";

        // Maior valorização
        const valorizacao = atletas.sort((a, b) => b.variacao_num - a.variacao_num)[0];

        document.getElementById("valorizacao").innerText =
            valorizacao.apelido + " (+" + valorizacao.variacao_num.toFixed(2) + ")";

    } catch (erro) {
        console.error("Erro ao carregar atletas:", erro);
    }
}

// ===========================
// BRASILEIRÃO (MODELO BASE)
// ===========================

function carregarBrasileiraoFake() {
    const tabela = `
        <table style="width:100%; border-collapse: collapse;">
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Pontos</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Carregando API...</td>
                <td>--</td>
            </tr>
        </table>
    `;

    document.getElementById("tabelaBrasileirao").innerHTML = tabela;
}

// ===========================
// INICIALIZAÇÃO
// ===========================

carregarStatusCartola();
carregarAtletas();
carregarBrasileiraoFake();