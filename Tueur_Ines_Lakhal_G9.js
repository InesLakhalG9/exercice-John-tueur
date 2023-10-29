// Creéation du tueur Jason
const jason = {
    nom: "Jason",
    pointsDeVie: 100
};

// Tableau des caractéristiques des survivants Nerd, Sportif et Blonde
const caracteristiquesSurvivants = [
    { nom: "Nerd", probaMort: 0.3, probaInfligerDegats: 0.5, probaMortInfligeantDegats: 0.2 },
    { nom: "Sportif", probaMort: 0.2, probaInfligerDegats: 0.6, probaMortInfligeantDegats: 0.1 },
    { nom: "Blonde", probaMort: 0.4, probaInfligerDegats: 0.4, probaMortInfligeantDegats: 0.3 },
];

// Tableau de prénoms des survivants
const prenomsSurvivants = ["Alice", "Bob", "Charlie", "David", "Eva"];

// Création des survivants
const survivants = [];
for (let i = 0; i < 5; i++) {
    const nomSurvivant = prenomsSurvivants[Math.floor(Math.random() * prenomsSurvivants.length)];
    const caracteristique = caracteristiquesSurvivants[Math.floor(Math.random() * caracteristiquesSurvivants.length)];
    survivants.push({
        nom: nomSurvivant,
        caracteristique: caracteristique,
        pointsDeVie: 100
    });
}

// Fonction pour simuler une attaque
function attaquer(attacker, target) {
    const random = Math.random();
    if (random < target.caracteristique.probaMort) {
        target.pointsDeVie = 0;
        return `${attacker.nom} a tué ${target.nom}.`;
    } else if (random < target.caracteristique.probaMort + target.caracteristique.probaInfligerDegats) {
        target.pointsDeVie -= 10;
        return `${target.nom} a esquivé et a infligé 10 points de dégâts à ${attacker.nom}.`;
    } else {
        attacker.pointsDeVie -= 15;
        target.pointsDeVie = 0;
        return `${target.nom} a infligé 15 points de dégâts à ${attacker.nom} mais est mort en le faisant.`;
    }
}

// Boucle principale du jeu
while (jason.pointsDeVie > 0 && survivants.some(survivant => survivant.pointsDeVie > 0)) {
    const survivantAttaque = survivants[Math.floor(Math.random() * survivants.length)];
    console.log(attaquer(jason, survivantAttaque));
    if (jason.pointsDeVie <= 0) {
        console.log("Jason est mort.");
    } else if (!survivants.some(survivant => survivant.pointsDeVie > 0)) {
        const survivantsMorts = survivants.filter(survivant => survivant.pointsDeVie <= 0).map(survivant => survivant.nom);
        console.log(`Les survivants ont gagné mais RIP à ${survivantsMorts.join(", ")}.`);
    }
}

//crée par Ines Lakhal