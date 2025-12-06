# OrologioQuiz PWA – GitHub Pages

Build: 2025-12-06 18:32

## Struttura
- `OrologioQuiz.html`
- `manifest.json` (con `start_url` e `scope` prefissati a `/orologioquiz/`)
- `sw.js` (cache dei file con path `/orologioquiz/...`)
- `images/` (icone any + maskable + favicon)
- `.well-known/assetlinks.json` (template da completare)

## Pubblicazione (GitHub Pages)
1. Crea un repository chiamato **orologioquiz** e carica tutti questi file nella root del repo.
2. In **Settings → Pages**, imposta **Branch: main** e **Root**.
3. L'URL sarà `https://TUONOME.github.io/orologioquiz`.
4. Verifica:
   - `manifest.json` è raggiungibile su `https://TUONOME.github.io/orologioquiz/manifest.json`.
   - `sw.js` è raggiungibile su `https://TUONOME.github.io/orologioquiz/sw.js`.

## Trusted Web Activity
- Imposta `.well-known/assetlinks.json` all'URL:
  `https://TUONOME.github.io/orologioquiz/.well-known/assetlinks.json`
- Sostituisci `package_name` e `sha256_cert_fingerprints` con i tuoi valori.

## Nota
Se cambi il nome del repo, aggiorna `BASE` (prefisso) nei file: `manifest.json`, `sw.js`, `OrologioQuiz.html`.
