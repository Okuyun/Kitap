function goBack() {
    let f = '/Kitap/'
    if (location.pathname.includes('garibce')) f += 'garibce/'
    if (location.pathname.includes('ders')) f += 'ders/'
    if (location.pathname.includes('cuma')) f += 'cuma/'
    location.pathname = f
    // console.log('goBack', location.pathname, f)
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
  