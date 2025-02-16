﻿# Leitner System
## 📌 Description 

Leitner System est une application de gestion de fiches d'apprentissage basée sur le système Leitner. Elle permet aux utilisateurs de créer, classer et réviser leurs cartes de manière optimisée grâce à la répétition espacée.

## 🚀 Fonctionnalités

🔹 ✅ Création de fiches de révision (question/réponse, tags, catégories)

🔹 ✅ Sélection des cartes à réviser chaque jour selon leur fréquence

🔹 ✅ Évaluation automatique des réponses et ajustement des catégories

🔹 ✅ Interface moderne et responsive avec React & Material UI

🔹 ✅ API REST conforme à Swagger pour l'intégration backend

## Installation & Configuration

### 1️⃣ Prérequis
- **Node.js**
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
