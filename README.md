# TableauDeBord

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

 ##Exécution du projet## :

 1:Prérequis : Assurez-vous d'avoir Node.js installé sur votre système. Si ce n'est pas le cas, vous pouvez le télécharger à partir du site officiel : Node.js.
 2:Cloner le projet :Téléchargez ou clonez le projet depuis le référentiel GitHub.
 3:Ouvrez votre terminal/commande dans le répertoire du projet.
 4:Installez les dépendances en exécutant la commande suivante : npm install
 5:Démarrer json-server :json-server --watch db.json
 6:Démarrer l'application Angular : Utilisez la commande suivante pour démarrer l'application Angular : ng serve
   L'application sera accessible à l'adresse http://localhost:4200/ par défaut.


   ##Utilisation de l'application :

 1:Ouvrez un navigateur web et accédez à l'adresse http://localhost:4200/ une page de login et de registration s'afficher 
 2:Accede a l'application : il ya deux type de login Admin et candidate :
                          pour accéder comme Admin utiliser les donnés suivant : {email:admin@test.com,passwrd:123456}
                          pour acceder comme candidate il faut tout d'abord créer un compte et aprez le login

3:Admin => une table de borde s'affiche qui contain des infos sur les candidate visualiser avec des graphes et un tableau  qui container des lines pour chaque candidat pour l'afficher               des informations personnelles aussi, tu peux filtre la table en rechercher des candidates par leur username

4:Candidate : Après login si le candidate na pas de rendez-vous une forme s'afficher pour choisie la la date d'examen et payer le montant, si le candidate a déjà réservez une date une               cadre s'afficher qui contiens la date et le montant payer et un button pour le modifier
