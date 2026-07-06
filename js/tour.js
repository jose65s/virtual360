/* ============================================================
   VISITA VIRTUAL 360° — "ArquiMaps"
   Colegio Nacional EMD Arq. Tomás Romero Pereira
   ------------------------------------------------------------
   Cada escena = una foto 360° en la carpeta /images.
   - title    : nombre que se ve en el menú
   - cat      : grupo del menú (Exteriores / Comunes / Aulas)
   - pitch/yaw/hfov : hacia dónde mira la cámara al entrar
   - hotSpots : puntos clicables
        type:"scene" => salta a otra escena (usar sceneId)
        type:"info"  => muestra un texto

   ⚠️ Las direcciones (yaw) de las flechas son APROXIMADAS.
   Para ajustarlas: abrí el tour, poné la vista donde querés la
   flecha, apretá F12 y escribí  viewer.getYaw()  y  viewer.getPitch().
   Copiá esos números en el hotspot.
   ============================================================ */

const TOUR = {
    title: "ArquiMaps — Colegio Arq. Tomás Romero Pereira",
    firstScene: "entrada",

    scenes: {

        /* ---------- EXTERIORES ---------- */
        "entrada": {
            title: "Entrada / Fachada", cat: "Exteriores",
            panorama: "images/entrada.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [
                { type: "scene", text: "Entrar al colegio", pitch: -2, yaw: 0, sceneId: "hall" }
            ]
        },
        "fondo": {
            title: "Patio trasero", cat: "Exteriores",
            panorama: "images/fondo.jpg", pitch: 0, yaw: 0, hfov: 120,
            hotSpots: [
                { type: "scene", text: "Volver al patio", pitch: -2, yaw: 180, sceneId: "patio" }
            ]
        },

        /* ---------- ESPACIOS COMUNES ---------- */
        "hall": {
            title: "Hall de acceso", cat: "Comunes",
            panorama: "images/hall.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [
                { type: "scene", text: "Salir a la entrada", pitch: -2, yaw: 180, sceneId: "entrada" },
                { type: "scene", text: "Ir al patio",        pitch: -2, yaw: 0,   sceneId: "patio" }
            ]
        },
        "patio": {
            title: "Patio principal", cat: "Comunes",
            panorama: "images/patio.jpg", pitch: 0, yaw: 0, hfov: 115,
            hotSpots: [
                { type: "scene", text: "Hall",         pitch: -2, yaw: 180, sceneId: "hall" },
                { type: "scene", text: "Cancha",       pitch: -2, yaw: -60, sceneId: "cancha" },
                { type: "scene", text: "Cantina",      pitch: -2, yaw: -25, sceneId: "cantina" },
                { type: "scene", text: "Galería de aulas", pitch: -2, yaw: 40, sceneId: "galeria" },
                { type: "scene", text: "Coordinación", pitch: -2, yaw: 90,  sceneId: "coordinacion" },
                { type: "scene", text: "Patio trasero",pitch: -2, yaw: 150, sceneId: "fondo" }
            ]
        },
        "cancha": {
            title: "Cancha techada", cat: "Comunes",
            panorama: "images/cancha.jpg", pitch: 0, yaw: 0, hfov: 120,
            hotSpots: [
                { type: "scene", text: "Volver al patio", pitch: -2, yaw: 180, sceneId: "patio" },
                { type: "scene", text: "Cantina",         pitch: -2, yaw: 90,  sceneId: "cantina" }
            ]
        },
        "cantina": {
            title: "Cantina", cat: "Comunes",
            panorama: "images/cantina.jpg", pitch: 0, yaw: 0, hfov: 115,
            hotSpots: [
                { type: "scene", text: "Volver al patio", pitch: -2, yaw: 180, sceneId: "patio" }
            ]
        },
        "galeria": {
            title: "Galería de aulas", cat: "Comunes",
            panorama: "images/galeria.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [
                { type: "scene", text: "Volver al patio",  pitch: -2, yaw: 180, sceneId: "patio" },
                { type: "scene", text: "Aula Mini Promo",   pitch: -2, yaw: 0,   sceneId: "aula_minipromo" },
                { type: "scene", text: "Aula Emboscada",    pitch: -2, yaw: 35,  sceneId: "aula_emboscada" },
                { type: "scene", text: "Aula (mural obreros)", pitch: -2, yaw: -35, sceneId: "aula_obreros" },
                { type: "scene", text: "Otra vista galería",pitch: -2, yaw: 90,  sceneId: "galeria_2" }
            ]
        },
        "galeria_2": {
            title: "Galería (vista 2) — ¿duplicado?", cat: "Comunes",
            panorama: "images/galeria_2.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [
                { type: "scene", text: "Volver a la galería", pitch: -2, yaw: 180, sceneId: "galeria" }
            ]
        },
        "coordinacion": {
            title: "Pasillo / Coordinación", cat: "Comunes",
            panorama: "images/coordinacion.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [
                { type: "scene", text: "Volver al patio",   pitch: -2, yaw: 180, sceneId: "patio" },
                { type: "scene", text: "Dirección",         pitch: -2, yaw: 90,  sceneId: "direccion" },
                { type: "scene", text: "Aula Mercosur",     pitch: -2, yaw: 0,   sceneId: "aula_mercosur" },
                { type: "scene", text: "Aula Promo 25",     pitch: -2, yaw: 30,  sceneId: "aula_promo25" },
                { type: "scene", text: "Aula Batín (3°)",   pitch: -2, yaw: -30, sceneId: "aula_batin" },
                { type: "scene", text: "Aula BCCS 2°",      pitch: -2, yaw: 60,  sceneId: "aula_bccs2" },
                { type: "scene", text: "Aula",              pitch: -2, yaw: -60, sceneId: "aula_g" }
            ]
        },
        "direccion": {
            title: "Dirección / Secretaría", cat: "Comunes",
            panorama: "images/direccion.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [
                { type: "scene", text: "Volver a Coordinación", pitch: -2, yaw: 180, sceneId: "coordinacion" }
            ]
        },

        /* ---------- AULAS ---------- */
        "aula_mercosur": {
            title: "Aula — Mercosur", cat: "Aulas",
            panorama: "images/aula_mercosur.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir al pasillo", pitch: -2, yaw: 0, sceneId: "coordinacion" } ]
        },
        "aula_promo25": {
            title: "Aula — Promo 25", cat: "Aulas",
            panorama: "images/aula_promo25.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir al pasillo", pitch: -2, yaw: 0, sceneId: "coordinacion" } ]
        },
        "aula_batin": {
            title: "Aula — Batín (3°)", cat: "Aulas",
            panorama: "images/aula_batin.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir al pasillo", pitch: -2, yaw: 0, sceneId: "coordinacion" } ]
        },
        "aula_g": {
            title: "Aula", cat: "Aulas",
            panorama: "images/aula_g.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir al pasillo", pitch: -2, yaw: 0, sceneId: "coordinacion" } ]
        },
        "aula_bccs2": {
            title: "Aula — BCCS 2°", cat: "Aulas",
            panorama: "images/aula_bccs2.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir al pasillo", pitch: -2, yaw: 0, sceneId: "coordinacion" } ]
        },
        "aula_obreros": {
            title: "Aula — Mural obreros", cat: "Aulas",
            panorama: "images/aula_obreros.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir a la galería", pitch: -2, yaw: 0, sceneId: "galeria" } ]
        },
        "aula_minipromo": {
            title: "Aula — Mini Promo", cat: "Aulas",
            panorama: "images/aula_minipromo.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir a la galería", pitch: -2, yaw: 0, sceneId: "galeria" } ]
        },
        "aula_minipromo_2": {
            title: "Aula Mini Promo (vista 2) — ¿duplicado?", cat: "Aulas",
            panorama: "images/aula_minipromo_2.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir a la galería", pitch: -2, yaw: 0, sceneId: "galeria" } ]
        },
        "aula_emboscada": {
            title: "Aula — Emboscada", cat: "Aulas",
            panorama: "images/aula_emboscada.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir a la galería", pitch: -2, yaw: 0, sceneId: "galeria" } ]
        },
        "aula_emboscada_2": {
            title: "Aula Emboscada (vista 2) — ¿duplicado?", cat: "Aulas",
            panorama: "images/aula_emboscada_2.jpg", pitch: 0, yaw: 0, hfov: 110,
            hotSpots: [ { type: "scene", text: "Salir a la galería", pitch: -2, yaw: 0, sceneId: "galeria" } ]
        }
    }
};

/* ============================================================
   MOTOR (no hace falta tocar de acá para abajo)
   ============================================================ */
function buildScenes() {
    const out = {};
    for (const id in TOUR.scenes) {
        const s = TOUR.scenes[id];
        out[id] = {
            title: s.title, type: "equirectangular", panorama: s.panorama,
            pitch: s.pitch || 0, yaw: s.yaw || 0, hfov: s.hfov || 110, autoLoad: true,
            hotSpots: (s.hotSpots || []).map(h => ({
                pitch: h.pitch, yaw: h.yaw,
                type: h.type,
                text: h.text,
                sceneId: h.sceneId,
                cssClass: h.type === "scene" ? "custom-hotspot" : "custom-hotspot hotspot-info",
                createTooltipFunc: hotspotTooltip,
                createTooltipArgs: h.text
            }))
        };
    }
    return out;
}

function hotspotTooltip(div, text) {
    div.classList.add('custom-hotspot');
    const span = document.createElement('span');
    span.innerHTML = text;
    span.style.cssText =
        "position:absolute;bottom:120%;left:50%;transform:translateX(-50%);" +
        "background:rgba(0,0,0,0.8);color:#fff;padding:5px 10px;border-radius:6px;" +
        "font-size:13px;white-space:nowrap;display:none;pointer-events:none;";
    div.appendChild(span);
    div.addEventListener('mouseenter', () => span.style.display = 'block');
    div.addEventListener('mouseleave', () => span.style.display = 'none');
}

const viewer = pannellum.viewer('panorama', {
    default: {
        firstScene: TOUR.firstScene,
        sceneFadeDuration: 800,
        autoLoad: true,
        showControls: true,
        compass: true
    },
    scenes: buildScenes()
});
window.viewer = viewer;

viewer.on('load', () => {
    const ls = document.getElementById('loading-screen');
    if (ls) ls.classList.add('hidden');
});

document.getElementById('tour-title').textContent = TOUR.title;

/* --- Menú agrupado por categoría --- */
function buildMenu() {
    const list = document.getElementById('scene-list');
    list.innerHTML = '';
    const cats = {};
    for (const id in TOUR.scenes) {
        const c = TOUR.scenes[id].cat || "Otros";
        (cats[c] = cats[c] || []).push(id);
    }
    const order = ["Exteriores", "Comunes", "Aulas"];
    const catNames = Object.keys(cats).sort((a, b) => {
        const ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    catNames.forEach(c => {
        const h = document.createElement('div');
        h.className = 'menu-cat';
        h.textContent = c;
        list.appendChild(h);
        cats[c].forEach(id => {
            const s = TOUR.scenes[id];
            const item = document.createElement('div');
            item.className = 'scene-item';
            item.dataset.id = id;
            item.innerHTML = `<img src="${s.panorama}" loading="lazy"><span>${s.title}</span>`;
            item.addEventListener('click', () => { viewer.loadScene(id); closeMenu(); });
            list.appendChild(item);
        });
    });
    highlightActive(TOUR.firstScene);
}
function highlightActive(id) {
    document.querySelectorAll('.scene-item').forEach(el =>
        el.classList.toggle('active', el.dataset.id === id));
}
viewer.on('scenechange', highlightActive);

const menu = document.getElementById('scene-menu');
function openMenu()  { menu.classList.add('open'); }
function closeMenu() { menu.classList.remove('open'); }
document.getElementById('btn-menu').addEventListener('click', openMenu);
document.getElementById('btn-close-menu').addEventListener('click', closeMenu);

buildMenu();
