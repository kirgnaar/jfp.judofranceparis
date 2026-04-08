document.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenue sur le projet JFP.JudoFranceParis !");

    // Animation simple pour les statistiques
    const stats = document.querySelectorAll('.stat-card h2');
    stats.forEach(stat => {
        console.log(`Statistique trouvée : ${stat.innerText}`);
    });
});
