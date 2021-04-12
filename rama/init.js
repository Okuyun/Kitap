function goBack() {
    location.pathname = "/Kitap/rama/"
}
function init() {
    for (let a of document.querySelectorAll('a')) {
      if (!a.name) continue
      a.href = "/Kuran/reader.html#"+a.name
      a.target = "iqra"
    }
    for (let b of document.querySelectorAll('.goBack'))
      b.onclick = goBack
    title.innerText = document.title
}
init()
  