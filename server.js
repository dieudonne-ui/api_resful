const express = require("express");//importe express.js
const cors = require("cors"); //permet a lutilisateur d'nteragi avec l'api

const app = express();
app.use(express.json());
app.use(cors());

// Données en mémoire (array) c'est un tableaux d'objet et chaque objet est une taches
let tasks = [
    { id: 1, description: "Faire son activité" },
    { id: 2, description: "importer son travail sur github" },
    { id: 3, description: "Rendre son devoir a temps" },
    { id: 4, description: "Réviser le JavaScript" },
    {id: 5, description: "appronfondir les notion de Node.js"}
];

// Routes : nous ecrivons ici des fonction pour chaque fonctionnalité 

// Obtenir toutes les tâches
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Ajouter une tâche
app.post("/tasks", (req, res) => {
    const newTask = { id: tasks.length + 1, description: req.body.description }; // on genere un indice puis on attribut directement la description de la tâche
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Obtenir une tâche specifique par son ID
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    task ? res.json(task) : res.status(404).json({ message: "Tâche non trouvée" });
});

// Modifier une tâche
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id); //retrouver l'indice de la tache 
    if (task) {
        task.description = req.body.description || task.description;
        res.json(task); //saisi la nouvelle description de la tâche puis  la description prend la nouvelle valeur
    } else {
        res.status(404).json({ message: "Tâche non trouvée" });//si l'utilisateur saisi une valeur dont l'indice n'existe pas on lui retourne un message d'erreur 
    }
});

// Supprimer une tâche
app.delete("/tasks/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: "Tâche supprimée" });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
