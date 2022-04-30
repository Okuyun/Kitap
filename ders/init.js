function goBack() {
    let p = location.pathname.includes('garibce')?
            'garibce' : 'ders'
    location.pathname = '/Kitap/'+p+'/'
}
function init() {
    for (let a of document.querySelectorAll('a')) {
      if (!a.name) continue
      a.href = "/Kuran/reader.html#"+a.name
      a.target = "iqra"
    }
    for (let b of document.querySelectorAll('.goBack'))
      b.onclick = goBack
}
init()
  