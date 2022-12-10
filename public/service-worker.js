// Set a name for the current cache
let cacheName = 'v1';

// Default files to always cache
let cacheFiles = [
  './',
  './index.html',
  './index.js',
  './styles.min.css',
  './font/RussoOne-Regular.ttf',
  './images/icon-plus.svg',
  './images/icon-reset.svg',
  './images/icon-save.svg',
  './images/text/text-bold-bg-black.svg',
  './images/text/text-bold-bg-white.svg',
  './images/text/text-bold-black.svg',
  './images/text/text-bold-white.svg',
  './favicon.ico',
  './logo192.png',
  './logo512.png',
]


self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installed');

  // e.waitUntil Delays the event until the Promise is resolved
  e.waitUntil(

    // Open the cache
    caches.open(cacheName).then(function (cache) {

      // Add all the default files to the cache
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles);
    })
  ); // end e.waitUntil
});


self.addEventListener('activate', event => {
  // The "activate" event is a good time to clean up old caches.
  event.waitUntil(
    // Get all the cache keys (cache names).
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // If a cached item is saved under a previous cache name,
          // delete that cached file.
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Listen for the "fetch" event, which is triggered whenever a network request
// is made.
self.addEventListener('fetch', event => {
  // Respond to the "fetch" event by checking if the requested resource is
  // available in the cache. If it is, return the cached version. If not,
  // fetch the resource from the network and cache it for future requests.
  event.respondWith(
    // Check in the cache for the requested resource.
    caches.match(event.request).then(response => {
      // If the requested resource is available in the cache, return it.
      if (response) {
        return response;
      }

      // If the requested resource is not available in the cache,
      // fetch it from the network and cache it for future requests.
      var requestClone = event.request.clone();
      return fetch(requestClone).then(response => {
        // If the network request is successful, cache the response.
        if (response) {
          var responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }

        // Return the network response.
        return response;
      });
    })
  );
});