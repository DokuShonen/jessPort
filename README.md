# Portfolio — KABORE Louise Jessica Amdiatou

Site portfolio personnel pour une étudiante en technologie du génie informatique.

## Aperçu

- Thème sombre avec accent émeraude
- Animations au scroll (Motion)
- Design responsive (mobile-first)
- Icônes Phosphor

## Sections

1. **Hero** — Nom, titre, photo de profil, CTA
2. **À propos** — Bio + domaines de compétence
3. **Compétences** — Technologies organisées par catégorie
4. **Expérience** — Parcours professionnel
5. **Projets** — Réalisations personnelles
6. **Formation** — Parcours académique
7. **Contact** — Email, téléphone

## Technologies

- [Next.js](https://nextjs.org/) — Framework React
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Motion](https://motion.dev/) — Animations
- [Phosphor Icons](https://phosphoricons.com/) — Icônes
- [TypeScript](https://www.typescriptlang.org/) — Typage

## Installation

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Démarrage rapide

```bash
# Cloner
git clone <url-du-repo>
cd jessPort

# Installer
npm install

# Lancer
npm run dev
```

Ouvrir http://localhost:3000

> **Linux** : si vous voyez des erreurs `ENOSPC`, augmentez la limite inotify :
> ```bash
> echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
> ```

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification du code |

## Personnalisation

### Photo de profil
Placer votre image dans `public/photo.jpg`.

### Données personnelles
Modifier les constantes dans `src/app/page.tsx` :
- `SKILLS` — Compétences techniques
- `EXPERIENCE` — Expériences professionnelles
- `PROJECTS` — Projets
- `FORMATION` — Parcours académique
- Coordonnées de contact

### Thème
Modifier les variables CSS dans `src/app/globals.css`.

## Structure

Voir [STRUCTURE.md](./STRUCTURE.md) pour les détails d'installation et l'arborescence complète.

## Licence

Projet personnel.
