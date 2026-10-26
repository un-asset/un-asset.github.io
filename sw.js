// 설치(홈 화면 추가)용 서비스 워커.
// 화면(HTML)은 항상 서버에서 최신으로 받아와요. (폰에 예전 화면이 남지 않도록)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(function () { return fetch(e.request); }));
  }
});
