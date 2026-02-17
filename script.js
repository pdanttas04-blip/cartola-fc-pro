document.addEventListener("DOMContentLoaded", function () {

    const sections = {
        dashboard: document.getElementById("dashboard"),
        capitaes: document.getElementById("capitaes"),
        estatisticas: document.getElementById("estatisticas"),
        premium: document.getElementById("premium"),
        ranking: document.getElementById("ranking")
    };

    function hideAll() {
        Object.values(sections).forEach(sec => {
            if (sec) sec.style.display = "none";
        });
    }

    function show(section) {
        hideAll();
        if (sections[section]) {
            sections[section].style.display = "block";
        }
    }

    // MENU CLIQUES
    document.getElementById("btnDashboard").onclick = () => show("dashboard");
    document.getElementById("btnCapitaes").onclick = () => show("capitaes");
    document.getElementById("btnEstatisticas").onclick = () => show("estatisticas");
    document.getElementById("btnPremium").onclick = () => show("premium");
    document.getElementById("btnRanking").onclick = () => show("ranking");

    show("dashboard");

});