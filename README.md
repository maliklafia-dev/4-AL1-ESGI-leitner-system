# Leitner System
## 📌 Description 

Leitner System est une application de gestion de fiches d'apprentissage basée sur le système Leitner. Elle permet aux utilisateurs de créer, classer et réviser leurs cartes de manière optimisée grâce à la répétition espacée.

## 🚀 Fonctionnalités

🔹 ✅ Création de fiches de révision (question/réponse, tags, catégories)

🔹 ✅ Sélection des cartes à réviser chaque jour selon leur fréquence

🔹 ✅ Évaluation automatique des réponses et ajustement des catégories

🔹 ✅ Interface moderne et responsive avec React & Material UI

🔹 ✅ API REST conforme à Swagger pour l'intégration backend

---

## 📡 Explication détaillée du fonctionnement du projet  

### 🔹 Principe du système Leitner  
Le système Leitner est une **méthode de mémorisation** basée sur la répétition espacée :  
1. L’utilisateur **crée des fiches d’apprentissage** (question / réponse).  
2. **Chaque fiche commence en catégorie 1**.  
3. **Chaque jour, il révise ses fiches** selon un système de répétition :  
   - Si la réponse est **bonne**, la fiche monte en **catégorie supérieure**.  
   - Si la réponse est **mauvaise**, la fiche **revient en catégorie 1**.  
4. **Les fiches avancent de manière exponentielle** dans le temps (1 jour, 2 jours, 4 jours, etc.).  
5. **Une fiche bien apprise (catégorie 7) est retirée** du système.  

### 🔹 Interaction utilisateur  
1. **Ajout d’une nouvelle fiche**  
   - L’utilisateur renseigne une **question et une réponse**.  
   - Il peut ajouter **des tags** pour mieux classifier ses fiches.  
   - La fiche est enregistrée en **catégorie 1**.  

2. **Lancement du quiz quotidien**  
   - L’utilisateur voit **une question à la fois**.  
   - Il saisit sa réponse et la compare à la réponse correcte.  
   - Si la réponse est **fausse**, la **bonne réponse** est affichée et il peut **forcer la validation**.  
   - La fiche est **mise à jour dans la base de données**.  

3. **Mise à jour automatique des fiches**  
   - L’application suit le **planning de répétition** du système Leitner.  
   - Les fiches correctement répondues **progressent**, les mauvaises reviennent **en catégorie 1**.  

---


## Installation & Configuration

### 1️⃣ Prérequis
- **Node.js**
- **Next.js**
- **MongoDB**
- **npm** ou **yarn**

### 2️⃣ Cloner le projet

- git clone https://github.com/maliklafia-dev/4-AL1-ESGI-leitner-system.git


# Lancer l'application

Démarrer le backend
```sh
    cd backend
    make install   #Installer les dépendances
    make seeds    # Remplir la db
    make start  # Lancer le serveur en mode développement
```

L'API sera disponible sur : http://localhost:8080

📌 Documentation API : Accédez à Swagger sur http://localhost:8080/api-docs


Démarrer le frontend
```sh
    cd frontend
    npm install   #Installer les dépendances
    npm run build 
    npm run dev # Lancer le serveur Next.js
```

L'API sera disponible sur : http://localhost:3000


## 🛠️ Tests & Linter
### 1️⃣ frontend
```sh
    npm run lint
```

### 2️⃣ backend
```sh
    make lint
```

## 🏆 Bonus : Tests End-to-End
```sh
    npx playwright install
    npx playwright test tests/createCard.spec.ts 
```


## 🟠​ Swagger & API Documentation
### Swagger
Pour une documentation interactive de l'API :
- Ouvrez [Swagger Editor](https://editor.swagger.io/)
- Copiez-collez le contenu du fichier Swagger du projet
- Explorez et testez les différentes routes de l'API 🚀

## 🟠Autre
```sh
    make format
    make clean
```
