self.addEventListener('install', function (event) {
  console.log('SW installed');
});

self.addEventListener('activate', function (event) {
  console.log('SW activated');
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();

  e.waitUntil(
    clients
      .matchAll({
        includeUncontrolled: true,
        type: 'window',
      })
      .then(function (clientList) {
        if (clientList.length) {
          clientList[0].focus();
        }
      }),
  );
});
