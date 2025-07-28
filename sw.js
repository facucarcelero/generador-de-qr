const CACHE_NAME = 'qr-generator-v1.0.0';
const urlsToCache = [
  '/',
  '/qr-generator.html',
  '/qr-redirect.html',
  '/qrcode.min.js',
  '/Logo/android-chrome-192x192.png',
  '/Logo/android-chrome-512x512.png'
];

// Instalar el service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver desde cache si está disponible
        if (response) {
          return response;
        }
        
        // Si no está en cache, hacer petición a la red
        return fetch(event.request)
          .then(response => {
            // Verificar que la respuesta sea válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Solo cachear peticiones GET (no HEAD, POST, etc.)
            if (event.request.method === 'GET') {
              // Clonar la respuesta
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                })
                .catch(error => {
                  console.log('Error al cachear:', error);
                });
            }

            return response;
          });
      })
  );
});

// Actualizar cache cuando hay nueva versión
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 