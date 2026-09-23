# GitHub Pages deployment

Gebruik `main` + `/(root)` als publicatiebron.

Behoud deze mappenstructuur:

- `assets/logo-incasso-tabako.webp`
- `assets/team-incasso-tabako.webp`
- `dossiers/manu-p.html`
- `dossiers/rookincident-manu-p.html`
- `archieven/csi-zeeburgereiland-cobra-k.html`

Na wijzigingen in VS Code:

```bash
git add -A
git commit -m "Update website"
git push origin main
```

GitHub Pages publiceert daarna automatisch opnieuw.
