# ArquiMaps — Visita Virtual 360°
### Colegio Nacional EMD Arq. Tomás Romero Pereira — San Antonio, 2026

Tour virtual estático hecho con [Pannellum](https://pannellum.org/).
Son archivos estáticos: se publican gratis en GitHub Pages, sin servidor ni backend.

## 📁 Estructura
```
tour-virtual/
├── index.html          → página principal
├── css/style.css       → estilos (colores, menú, pantalla de carga)
├── js/tour.js          → CONFIGURACIÓN de las escenas (editar acá)
├── images/             → las 20 fotos 360° (ya optimizadas a 4096px)
└── README.md
```

## 🗺️ Escenas incluidas (20)
- **Exteriores:** entrada/fachada, patio trasero
- **Comunes:** hall, patio principal, cancha techada, cantina, galería de aulas
  (+ vista 2), pasillo/coordinación, dirección/secretaría
- **Aulas:** Mercosur, Promo 25, Batín (3°), BCCS 2°, mural obreros, un aula
  sencilla, Mini Promo (+vista 2), Emboscada (+vista 2)

> ⚠️ **Posibles duplicados:** `galeria_2`, `aula_minipromo_2` y `aula_emboscada_2`
> parecen ser la misma toma repetida. Si lo confirmás, borralos: quitá su bloque
> en `js/tour.js` y su archivo en `images/`.

## ⚙️ Cómo editar
En `js/tour.js`, objeto `TOUR`. Cada escena tiene título, categoría, foto y
hotspots (flechas). Las **direcciones de las flechas (`yaw`) son aproximadas**.
Para calibrarlas:
1. Corré el tour, poné la vista donde querés la flecha.
2. Apretá **F12** (consola) y escribí `viewer.getYaw()` y `viewer.getPitch()`.
3. Copiá esos números en el hotspot.

## 💻 Probar en local
⚠️ No abras `index.html` con doble clic (`file://` no carga las fotos 360°).
- **VS Code:** instalá la extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server*.
- **O terminal:** `python -m http.server` y entrá a `http://localhost:8000`.

## 🚀 Publicar en GitHub Pages
```bash
git init
git add .
git commit -m "ArquiMaps - visita virtual 360"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```
Luego en GitHub: `Settings` → `Pages` → *Branch: main / (root)* → **Save**.
Queda online en `https://TU_USUARIO.github.io/TU_REPO/`.

## ✏️ Pendientes sugeridos
- Reexportar y sumar las 2 fotos que salieron en negro (IMG_8302, IMG_8303).
- Agregar `images/logo.png` (aparece en la pantalla de carga).
- Opcional: plano/croquis del colegio como mapa interactivo de inicio.
- Ajustar los nombres de las aulas a sus números reales de sala.
