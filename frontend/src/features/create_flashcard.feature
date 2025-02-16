Feature: Création de carte dans le système de Leitner

  Scenario: L'utilisateur crée une nouvelle carte avec succès
    Given L'utilisateur est sur la page d'accueil
    When Il clique sur "➕ Add New Card"
    And Il remplit le formulaire avec une question et une réponse
    And Il clique sur "Add"
    And La nouvelle carte est visible dans la liste des cartes