const jogadores = [
  { nome: "Hulk", posicao: "Atacante", media: 9.1, valorizacao: 1.5 },
  { nome: "Arrascaeta", posicao: "Meia", media: 8.4, valorizacao: 1.1 },
  { nome: "Pedro", posicao: "Atacante", media: 8.2, valorizacao: 0.9 },
  { nome: "Raphael Veiga", posicao: "Meia", media: 7.9, valorizacao: 0.8 },
  { nome: "Tiquinho Soares", posicao: "Atacante", media: 7.5, valorizacao: 0.6 }
];

// Ordena por média
jogadores.sort((a, b) => b.media - a.media);

const rankingDiv = document.getElementById("ranking");

jogadores.forEach((jogador, index) => {
  const card = document.createElement("div");
  card.className = "player-card";

  if (index === 0) {
    card.classList.add("capitao");
  }

  card.innerHTML = `
    <h3>${index === 0 ? "👑 Capitão da Rodada" : ""}</h3>
    <h2>${jogador.nome}</h2>
    <p>Posição: ${jogador.posicao}</p>
    <p>Média: ${jogador.media}</p>
    <p>Valorização: +${jogador.valorizacao}</p>
  `;

  rankingDiv.appendChild(card);
});