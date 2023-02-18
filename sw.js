self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./assets/Tempo/assets/css/style.css", "./assets/pwa/images/logo192.png"]);
        })
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});