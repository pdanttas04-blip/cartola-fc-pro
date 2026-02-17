document.addEventListener("DOMContentLoaded", function () {
    carregarStatus();
});

// ===============================
// STATUS DO MERCADO
// ===============================
async function carregarStatus() {
    try {
        const response = await fetch("/api/cartola");
        const dados = await response.json();

        document.getElementById("rodada").innerText =
            "Rodada " + dados.rodada_atual;

        document.getElementById("mercado").innerText =
            "Mercado: " + dados.status.nome;

    } catch (error) {
        console.error("Erro ao carregar status:", error);
    }
}