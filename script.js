document.addEventListener("DOMContentLoaded", function () {

  async function carregarStatus() {
    try {
      const resposta = await fetch("https://api.cartola.globo.com/mercado/status");
      const dados = await resposta.json();

      document.querySelector(".status-rodada").innerText =
        "Rodada atual: " + dados.rodada_atual;

      document.querySelector(".status-mercado").innerText =
        "Mercado: " + dados.status.nome;

    } catch (erro) {
      console.log("Erro ao carregar status:", erro);
    }
  }

  async function carregarAtletas() {
    try {
      const resposta = await fetch("https://api.cartola.globo.com/atletas/mercado");
      const dados = await resposta.json();

      const atletas = Object.values(dados.atletas);

      const melhor = atletas.sort((a, b) => b.media_num - a.media_num)[0];
      document.querySelector(".melhor-jogador").innerText =
        melhor.apelido + " (" + melhor.media_num.toFixed(2) + ")";

      const valorizacao = atletas.sort((a, b) => b.variacao_num - a.variacao_num)[0];
      document.querySelector(".maior-valorizacao").innerText =
        valorizacao.apelido + " (+" + valorizacao.variacao_num.toFixed(2) + ")";

    } catch (erro) {
      console.log("Erro ao carregar atletas:", erro);
    }
  }

  carregarStatus();
  carregarAtletas();

});