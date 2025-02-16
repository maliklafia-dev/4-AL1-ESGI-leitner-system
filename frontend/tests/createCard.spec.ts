import { test, expect } from "@playwright/test";

test("L'utilisateur peut créer une nouvelle carte", async ({ page }) => {
    // 1. Aller sur la page d'accueil
    await page.goto("http://localhost:3000");

    // 2. Cliquer sur "Ajouter une Carte"
    await page.click('button:has-text("➕ Add New Card")');
    await page.waitForTimeout(1000);

    // 3. Vérifier que la pop-up est bien affichée
    await expect(page.getByTestId("input-question")).toBeVisible();

    // 4. Remplir les champs du formulaire
    await page.getByTestId("input-question").fill("Qu'est-ce que le TDD ?");
    await page.waitForTimeout(1000);
    await page.getByTestId("input-answer").fill("Test Driven Development");
    await page.waitForTimeout(1000);

    // 5. Soumettre le formulaire
    await page.getByTestId("submit-button").click();
    await page.waitForTimeout(1000);

    // 6. Aller voir la liste des cartes
    await page.getByTestId("close-popup-button").click();
    await page.waitForTimeout(1000);
});
