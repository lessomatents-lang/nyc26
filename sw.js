// Service worker generado en cada build (ver vite.config.js). Todo el viaje queda en caché.
const VERSION = 'nyc26-1ca7393ea217';
const ARCHIVOS = ["./","assets/error-BTdmRKoB.js","assets/index-Cc9_EtFH.css","assets/index-pyPxrKjp.js","assets/instrument-serif-DGrY7Whw.woff2","assets/instrument-serif-italic-Dv3QvL_F.woff2","assets/maplibre-gl-CLOS0QEu.js","assets/maplibre-gl-worker-VaXr2Fck.mjs","assets/node.browser-Bnr17H3D.js","assets/node.browser-HQ5SKBOf.js","assets/sdk-DwaA2WYu.js","c/i/06492af41e73-g.bin","c/i/06492af41e73-p.bin","c/i/077f767de25a-g.bin","c/i/077f767de25a-p.bin","c/i/09fa687d9dfb-g.bin","c/i/09fa687d9dfb-p.bin","c/i/0b43512597a8-g.bin","c/i/0b43512597a8-p.bin","c/i/0d13292f9ff0-g.bin","c/i/0d13292f9ff0-p.bin","c/i/0ddd339db548-g.bin","c/i/0ddd339db548-p.bin","c/i/10320dc4fd4a-g.bin","c/i/10320dc4fd4a-p.bin","c/i/1252971701dc-g.bin","c/i/1252971701dc-p.bin","c/i/12b6a92db669-g.bin","c/i/12b6a92db669-p.bin","c/i/168e9546d47d-g.bin","c/i/168e9546d47d-p.bin","c/i/175ab03705bb-g.bin","c/i/175ab03705bb-p.bin","c/i/17a92e6249be-g.bin","c/i/17a92e6249be-p.bin","c/i/181b2164c87d-g.bin","c/i/181b2164c87d-p.bin","c/i/1a8a97ac8f68-g.bin","c/i/1a8a97ac8f68-p.bin","c/i/1beb0f137b91-g.bin","c/i/1beb0f137b91-p.bin","c/i/1f3bfdffc53d-g.bin","c/i/1f3bfdffc53d-p.bin","c/i/233d73bef621-g.bin","c/i/233d73bef621-p.bin","c/i/285ffce1b0ff-g.bin","c/i/285ffce1b0ff-p.bin","c/i/2b7758c923de-g.bin","c/i/2b7758c923de-p.bin","c/i/2cc4de1be10a-g.bin","c/i/2cc4de1be10a-p.bin","c/i/2cfb32773e06-g.bin","c/i/2cfb32773e06-p.bin","c/i/2d0d34db132b-g.bin","c/i/2d0d34db132b-p.bin","c/i/2d92a9a6517f-g.bin","c/i/2d92a9a6517f-p.bin","c/i/2dbbd0e0212b-g.bin","c/i/2dbbd0e0212b-p.bin","c/i/2eb21c6eec6a-g.bin","c/i/2eb21c6eec6a-p.bin","c/i/2f7fbd4d5ebd-g.bin","c/i/2f7fbd4d5ebd-p.bin","c/i/34308cd423dd-g.bin","c/i/34308cd423dd-p.bin","c/i/36217a3c28c0-g.bin","c/i/36217a3c28c0-p.bin","c/i/37e50bd55f51-g.bin","c/i/37e50bd55f51-p.bin","c/i/3aa989a527ad-g.bin","c/i/3aa989a527ad-p.bin","c/i/3c3212e5eb09-g.bin","c/i/3c3212e5eb09-p.bin","c/i/3e59a95a6e37-g.bin","c/i/3e59a95a6e37-p.bin","c/i/45815c3c4514-g.bin","c/i/45815c3c4514-p.bin","c/i/46ce8dcca292-g.bin","c/i/46ce8dcca292-p.bin","c/i/47dfbdd0da90-g.bin","c/i/47dfbdd0da90-p.bin","c/i/4cf197db6ba7-g.bin","c/i/4cf197db6ba7-p.bin","c/i/4decd8a0a83c-g.bin","c/i/4decd8a0a83c-p.bin","c/i/4e248e159980-g.bin","c/i/4e248e159980-p.bin","c/i/4fabd16869b4-g.bin","c/i/4fabd16869b4-p.bin","c/i/4fb7bda64ecc-g.bin","c/i/4fb7bda64ecc-p.bin","c/i/506faa759e1e-g.bin","c/i/506faa759e1e-p.bin","c/i/52bf8aed13a6-g.bin","c/i/52bf8aed13a6-p.bin","c/i/543eeb269288-g.bin","c/i/543eeb269288-p.bin","c/i/551e87d1e702-g.bin","c/i/551e87d1e702-p.bin","c/i/567f65559fd9-g.bin","c/i/567f65559fd9-p.bin","c/i/58389bdbb25d-g.bin","c/i/58389bdbb25d-p.bin","c/i/5c78d87a5d16-g.bin","c/i/5c78d87a5d16-p.bin","c/i/5e92605075b2-g.bin","c/i/5e92605075b2-p.bin","c/i/5fda9d8e9882-g.bin","c/i/5fda9d8e9882-p.bin","c/i/6010793f855f-g.bin","c/i/6010793f855f-p.bin","c/i/60c0ca76d979-g.bin","c/i/60c0ca76d979-p.bin","c/i/61c8d8e97f90-g.bin","c/i/61c8d8e97f90-p.bin","c/i/62a506d9e0f5-g.bin","c/i/62a506d9e0f5-p.bin","c/i/6550f964602f-g.bin","c/i/6550f964602f-p.bin","c/i/65ecf5943418-g.bin","c/i/65ecf5943418-p.bin","c/i/66e3a78e2b9a-g.bin","c/i/66e3a78e2b9a-p.bin","c/i/67e797dc2086-g.bin","c/i/67e797dc2086-p.bin","c/i/695f83b8c30b-g.bin","c/i/695f83b8c30b-p.bin","c/i/6e71cf8f7e57-g.bin","c/i/6e71cf8f7e57-p.bin","c/i/7597f153d446-g.bin","c/i/7597f153d446-p.bin","c/i/75ba95e22844-g.bin","c/i/75ba95e22844-p.bin","c/i/7955fe3fb09f-g.bin","c/i/7955fe3fb09f-p.bin","c/i/7ed6944e5767-g.bin","c/i/7ed6944e5767-p.bin","c/i/82e51e910a14-g.bin","c/i/82e51e910a14-p.bin","c/i/83f0192a1d9c-g.bin","c/i/83f0192a1d9c-p.bin","c/i/842481731929-g.bin","c/i/842481731929-p.bin","c/i/852e992b7c9b-g.bin","c/i/852e992b7c9b-p.bin","c/i/856bd35b0002-g.bin","c/i/856bd35b0002-p.bin","c/i/87f28cd60991-g.bin","c/i/87f28cd60991-p.bin","c/i/887aef7b3ab2-g.bin","c/i/887aef7b3ab2-p.bin","c/i/8a5c47f5c1de-g.bin","c/i/8a5c47f5c1de-p.bin","c/i/8e83a86d632a-g.bin","c/i/8e83a86d632a-p.bin","c/i/91ff81952c58-g.bin","c/i/91ff81952c58-p.bin","c/i/93500da1a23f-g.bin","c/i/93500da1a23f-p.bin","c/i/967b498194e2-g.bin","c/i/967b498194e2-p.bin","c/i/9eefa03dbcbc-g.bin","c/i/9eefa03dbcbc-p.bin","c/i/a28cdd5bb391-g.bin","c/i/a28cdd5bb391-p.bin","c/i/a2e334cf64ce-g.bin","c/i/a2e334cf64ce-p.bin","c/i/a529ecec64b8-g.bin","c/i/a529ecec64b8-p.bin","c/i/a8e0f062d826-g.bin","c/i/a8e0f062d826-p.bin","c/i/aa1e485a5047-g.bin","c/i/aa1e485a5047-p.bin","c/i/ab332be29128-g.bin","c/i/ab332be29128-p.bin","c/i/aba333e9dd02-g.bin","c/i/aba333e9dd02-p.bin","c/i/ae3f24034bdc-g.bin","c/i/ae3f24034bdc-p.bin","c/i/ae540dc55143-g.bin","c/i/ae540dc55143-p.bin","c/i/b3b91e23ddf8-g.bin","c/i/b3b91e23ddf8-p.bin","c/i/b45f74eabe4a-g.bin","c/i/b45f74eabe4a-p.bin","c/i/b6159fdd2c8b-g.bin","c/i/b6159fdd2c8b-p.bin","c/i/b68ca6b3e457-g.bin","c/i/b68ca6b3e457-p.bin","c/i/bd36bdfd74df-g.bin","c/i/bd36bdfd74df-p.bin","c/i/be062f412ac2-g.bin","c/i/be062f412ac2-p.bin","c/i/bee1aea64a1f-g.bin","c/i/bee1aea64a1f-p.bin","c/i/c006a8255290-g.bin","c/i/c006a8255290-p.bin","c/i/c29c23afb41c-g.bin","c/i/c29c23afb41c-p.bin","c/i/c4f02ca60002-g.bin","c/i/c4f02ca60002-p.bin","c/i/c642a6640e17-g.bin","c/i/c642a6640e17-p.bin","c/i/c6a8e74d531c-g.bin","c/i/c6a8e74d531c-p.bin","c/i/c950a670c812-g.bin","c/i/c950a670c812-p.bin","c/i/c9ec642120ae-g.bin","c/i/c9ec642120ae-p.bin","c/i/cb70403de117-g.bin","c/i/cb70403de117-p.bin","c/i/ce2dff38bd18-g.bin","c/i/ce2dff38bd18-p.bin","c/i/ce6b8ad0ef39-g.bin","c/i/ce6b8ad0ef39-p.bin","c/i/ce9005fa12d0-g.bin","c/i/ce9005fa12d0-p.bin","c/i/cf01229cd5b4-g.bin","c/i/cf01229cd5b4-p.bin","c/i/d1ed7ccb7641-g.bin","c/i/d1ed7ccb7641-p.bin","c/i/d36768a52b20-g.bin","c/i/d36768a52b20-p.bin","c/i/d64b7741239c-g.bin","c/i/d64b7741239c-p.bin","c/i/d7fc43df47bf-g.bin","c/i/d7fc43df47bf-p.bin","c/i/dc0fefe4e021-g.bin","c/i/dc0fefe4e021-p.bin","c/i/dc7c78a4cf6c-g.bin","c/i/dc7c78a4cf6c-p.bin","c/i/dd8d378a58f7-g.bin","c/i/dd8d378a58f7-p.bin","c/i/e091c46bde87-g.bin","c/i/e091c46bde87-p.bin","c/i/e33f25ab84c1-g.bin","c/i/e33f25ab84c1-p.bin","c/i/ecf16e009dcb-g.bin","c/i/ecf16e009dcb-p.bin","c/i/f0f4ce049630-g.bin","c/i/f0f4ce049630-p.bin","c/i/f2c7570f1153-g.bin","c/i/f2c7570f1153-p.bin","c/i/f2cf2eb19961-g.bin","c/i/f2cf2eb19961-p.bin","c/i/f4f1fcd13501-g.bin","c/i/f4f1fcd13501-p.bin","c/i/f564bd262c92-g.bin","c/i/f564bd262c92-p.bin","c/i/fa46b8e1d7f7-g.bin","c/i/fa46b8e1d7f7-p.bin","c/i/fdde2ec565b7-g.bin","c/i/fdde2ec565b7-p.bin","c/meta.json","c/v.bin","icons/apple-touch-icon-v2.png","icons/icon-192-v2.png","icons/icon-512-v2.png","icons/icon-maskable-512-v2.png","icons/icono-v2.svg","index.html","manifest.webmanifest"];

self.addEventListener('install', (e) => {
  // cache: 'reload' evita guardar una copia vieja de la caché HTTP (GitHub Pages cachea 10 min):
  // una página antigua apuntando a archivos que ya no existen deja la app en blanco.
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      // «teselas-nyc26» era el mapa antiguo (OpenStreetMap en imagen): ya no se usa.
      .then((ks) => Promise.all(ks.filter((k) => (k.startsWith('nyc26-') && k !== VERSION) || k === 'teselas-nyc26').map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Página: primero la red (versión al día), con la copia guardada si no hay conexión o tarda.
async function pagina(request) {
  const red = fetch(request, { cache: 'no-store' }).then((r) => (r.ok ? r : Promise.reject(r)));
  const espera = new Promise((_, mal) => setTimeout(mal, 3500));
  try { return await Promise.race([red, espera]); }
  catch { return (await caches.match('./', { ignoreSearch: true })) ?? red; }
}

// Las teselas cambian de carpeta con cada versión semanal de OpenFreeMap; se guardan sin la
// versión para que las descargadas antes del viaje sirvan siempre. Teselas y letras: primero la
// caché. El índice (/planet): primero la red, para enterarse de la versión nueva.
async function mapa(request, url) {
  const c = await caches.open('mapa-nyc26');
  const tesela = url.pathname.match(/^\/planet\/[^/]+\/(\d+\/\d+\/\d+\.pbf)$/);
  const clave = tesela ? `${url.origin}/planet/_/${tesela[1]}` : request.url;
  const guardar = (res) => { if (res.ok) c.put(clave, res.clone()); return res; };
  if (url.pathname === '/planet' || url.pathname.startsWith('/styles/')) {
    const espera = new Promise((_, mal) => setTimeout(mal, 4000)); // con mala cobertura, mejor lo guardado
    try { return guardar(await Promise.race([fetch(request), espera])); } catch { return (await c.match(clave)) ?? fetch(request); }
  }
  const guardada = await c.match(clave);
  if (guardada) return guardada;
  try { return guardar(await fetch(request)); } catch { return Response.error(); }
}

self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);
  // Mapa (OpenFreeMap): se guarda todo lo que se ve para poder usarlo luego sin conexión.
  if (url.hostname === 'tiles.openfreemap.org') { e.respondWith(mapa(request, url)); return; }
  if (request.method !== 'GET' || url.origin !== location.origin) return;
  if (request.mode === 'navigate') { e.respondWith(pagina(request)); return; }
  e.respondWith(caches.match(request, { ignoreSearch: true }).then((r) => r ?? fetch(request)));
});
