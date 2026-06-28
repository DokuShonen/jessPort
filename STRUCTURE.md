# Structure du projet

## Arborescence

```
jessPort/
├── public/
│   └── photo.jpg              ← Photo de profil (à ajouter)
├── src/
│   └── app/
│       ├── globals.css        ← Styles globaux + variables CSS
│       ├── layout.tsx         ← Layout racine (fonts, metadata)
│       └── page.tsx           ← Page principale du portfolio
├── package.json               ← Dépendances et scripts
├── tsconfig.json              ← Configuration TypeScript
├── next.config.ts             ← Configuration Next.js
└── postcss.config.mjs         ← Configuration PostCSS (Tailwind)
```

## Technologies

| Technologie | Version | Rôle |
|---|---|---|
| Next.js | 16.x | Framework React |
| React | 19.x | Bibliothèque UI |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 4.x | Styling utility-first |
| Motion | 12.x | Animations |
| Phosphor Icons | 2.x | Icônes |

---

## Installation sur Linux

### Prérequis
- Node.js ≥ 18 (recommandé : 20+)
- npm ≥ 9

### Étapes

```bash
# 1. Cloner le projet
git clone <url-du-repo>
cd jessPort

# 2. Installer les dépendances
npm install

# 3. Ajouter la photo de profil
# Copier votre photo dans public/photo.jpg

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

### Augmenter la limite inotify (recommandé)

Si vous rencontrez des erreurs `ENOSPC: System limit for number of file watchers reached` :

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## Installation sur Windows

### Prérequis
- Node.js ≥ 18 (recommandé : 20+) — télécharger sur https://nodejs.org
- npm (inclus avec Node.js)

### Étapes

```powershell
# 1. Cloner le projet
git clone <url-du-repo>
cd jessPort

# 2. Installer les dépendances
npm install

# 3. Ajouter la photo de profil
# Copier votre photo dans public\photo.jpg

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

---

## Commandes disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (hot reload) |
| `npm run build` | Build de production |
| `npm run start` | Lancer le build de production |
| `npm run lint` | Vérifier le code (ESLint) |

---

## Personnalisation

### Photo de profil
Remplacer `public/photo.jpg` par votre propre image.

### Informations personnelles
Modifier les constantes dans `src/app/page.tsx` :
- `EXPERIENCE` — Expériences professionnelles
- `PROJECTS` — Projets
- `FORMATION` — Parcours académique
- `SKILLS` — Compétences techniques
- Informations de contact (email, téléphone)

### Couleurs
Modifier les variables CSS dans `src/app/globals.css` :
- `--accent` — Couleur principale (vert émeraude par défaut)
- `--background` — Couleur de fond
- `--surface` — Couleur des cartes
