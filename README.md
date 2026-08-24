# Docteur Solution Tunisie — Site vitrine (Angular 17)

Site vitrine premium pour une HealthTech française/tunisienne : 40 ans
d'expertise santé, 5 000+ clients, 2 500 collaborateurs.

## Démarrage

```bash
npm install
npm start
```

Puis ouvrez http://localhost:4200

## Build de production

```bash
npm run build
```

Les fichiers sont générés dans `dist/docteur-solution-tunisie`.

## Architecture

```
src/app/
  components/   → composants réutilisables (header, hero, stats,
                  solutions-grid, solution-card, dashboard-preview,
                  chat-preview, tech-professionals, security,
                  experience, values, mobile-showcase, cta, icon, footer)
  pages/        → home, solutions, solution-detail (route dynamique
                  /solutions/:slug), about (a-propos), contact
  services/     → SolutionsService (données mockées, prêt pour API réelle)
  models/       → interfaces TypeScript (Solution, CompanyStat, CompanyValue)
  directives/   → RevealDirective (animations fade-in au scroll)
```

## Routes

- `/` — Accueil
- `/solutions` — Liste des solutions
- `/solutions/gestion-cabinet`
- `/solutions/agenda`
- `/solutions/dossier-patient`
- `/solutions/teleconsultation`
- `/solutions/messagerie`
- `/solutions/gestion-administrative`
- `/solutions/portail-patient`
- `/solutions/dashboard-medical`
- `/a-propos`
- `/contact`

## Héberger gratuitement sur GitHub Pages

1. Créez un dépôt GitHub (ex. `docteur-solution-tunisie`) et poussez ce
   dossier `dst-frontend` dedans :

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<votre-utilisateur>/docteur-solution-tunisie.git
   git push -u origin main
   ```

2. Avant de déployer, mettez à jour `src/environments/environment.prod.ts`
   avec l'URL réelle de votre backend (voir le README de `dst-backend` pour
   l'héberger gratuitement sur Render) :

   ```ts
   export const environment = {
     production: true,
     apiUrl: 'https://dst-backend-xxxx.onrender.com/api'
   };
   ```

3. Installez les dépendances puis déployez en une commande :

   ```bash
   npm install
   npm run deploy
   ```

   Cette commande (`ng deploy`, via `angular-cli-ghpages`) build le projet
   en production et pousse le résultat sur la branche `gh-pages` de votre
   dépôt — GitHub Pages sert directement cette branche.

4. Dans GitHub : **Settings → Pages**, vérifiez que la source est bien
   **Deploy from a branch → `gh-pages` / `root`**. Le site est alors
   disponible sur `https://<votre-utilisateur>.github.io/docteur-solution-tunisie/`.

5. **Important** : le script `deploy` dans `package.json` utilise
   `--base-href=/docteur-solution-tunisie/`. Si votre dépôt a un autre nom,
   remplacez cette valeur (dans `package.json` et `angular.json`) par
   `/<nom-de-votre-depot>/`.

6. Retournez sur `dst-backend` et ajoutez l'URL GitHub Pages
   (`https://<votre-utilisateur>.github.io`) dans la variable
   `CORS_ALLOWED_ORIGINS` du backend, sinon le navigateur bloquera les
   appels API (erreur CORS).

## Notes

- Toutes les données de dashboard, chat et statistiques sont **fictives**,
  à des fins de démonstration visuelle uniquement.
- La section sécurité évite volontairement toute mention de certification
  non confirmée (HDS, RGPD, ISO 27001…), conformément au brief.
- Le nom d'entreprise "Docteur Solution Tunisie" (DST) est utilisé comme
  identité de marque dans tout le projet (logo, header, footer, meta tags).
- Le formulaire de contact utilise Angular Reactive Forms et appelle le
  backend Spring Boot (`ContactService` → `POST /api/contact`). En cas
  d'échec (backend injoignable), un lien de secours `mailto:` s'affiche.
