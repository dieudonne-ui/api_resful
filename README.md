# api_resful
# API de gestion des tâches 

Une API RESTful en **Node.js** avec **Express.js** permettant de gérer des tâches.

##  Installation et exécution

###  Installer les dépendances
npm install

###Démarrer le serveur
node server.js
Le serveur démarre sur http://localhost:3000.

## Routes 
Méthode/	  URL               Description
GET        	/tasks	            Récupérer toutes les tâches
POST	    /tasks	            Ajouter une nouvelle tâche
GET	       /tasks/:id	        Récupérer une tâche par ID
PUT	       /tasks/:id           Modifier une tâche existante
DELETE	   /tasks/:id	        Supprimer une tâche


//Exemple d'utilisation
Ajouter une tâche (POST /tasks)
Requête JSON :

json
{
  "description": "Apprendre Node.js"
}
Modifier une tâche (PUT /tasks/1)
Requête JSON :

json
{
  "description": "Apprendre Express.js"
} Réponse JSON après modification :
json

{
  "id": 1,
  "description": "Apprendre Express.js"
}
**Test effectuer  avec Postman//
Lister les tâches
GET http://localhost:3000/task

modifier une tache
PUT http://localhost:3000/tasks/1


supprimer une taches
DELETE http://localhost:3000/tasks/1



ajouter une taches
POST http://localhost:3000/task