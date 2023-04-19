"use strict";
const CACHE = 'esma'
const PREF = '/Kitap/esma/'
const FILES = [PREF]
const NAMES = 
`index.html
icon-esma.png
manifest.json
Allah.html
Rahman.html
Malik.html
Selam.html
Mumin.html
Cebbar.html
Hallak.html
Bari.html
Aziz.html
Halim.html
Allam.html
Aliyy.html
Gafur.html
Tevvab.html
Afuv.html
Ehad.html
Vahid.html
Vehhab.html
Semi.html
Latif.html
Vedud.html
Muhyi.html
Hayy.html
Evvel.html
Zahir.html
Kadir.html
Nur.html
Kebir.html
Gani.html
Celal.html`.split('\n')
NAMES.forEach(x => FILES.push(PREF+x))

function installCB(e) {  //CB means call-back
  console.log("installing "+CACHE, FILES.length+" files");
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
addEventListener('install', installCB)

function save(req, resp) {
  // console.log("save "+req.url);
  if (!req.url.includes("esma"))
     return resp;
  return caches.open(CACHE)
  .then(cache => { // save request
    cache.put(req, resp.clone());
    return resp;
  }) 
  .catch(console.err)
}
function report(req) {
  console.log(CACHE+' matches '+req.url)
  return req
}
function fetchCB(e) { //fetch first
  let req = e.request
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => caches.match(req).then(report))
  )
}
addEventListener('fetch', fetchCB)

function removeOld(L) {
  return Promise.all(L.map(key => {
    if (!key.startsWith(CACHE) || key == CACHE)
       return null;
    console.log(key+" is deleted")
    return caches.delete(key)
  }))
}
function activateCB(e) {
  console.log(CACHE+" is activated");
  e.waitUntil(
    caches.keys().then(removeOld)
  )
}
addEventListener('activate', activateCB);

